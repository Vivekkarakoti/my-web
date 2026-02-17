import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Upload, Image as ImageIcon } from 'lucide-react';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  name: string;
  isNew?: boolean;
}

export interface ImageGalleryProps {
  images?: GalleryImage[];
  onImagesChange?: (images: GalleryImage[]) => void;
  autoSelect?: boolean;
  maxImages?: number;
  allowUpload?: boolean;
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images: initialImages = [],
  onImagesChange,
  autoSelect = true,
  maxImages = 50,
  allowUpload = true,
  className = ''
}) => {
  const [images, setImages] = useState<GalleryImage[]>(initialImages);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [newlyAddedIds, setNewlyAddedIds] = useState<Set<string>>(new Set());
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const nextIdRef = useRef(initialImages.length + 1);

  // Auto-select newly added images
  const autoSelectNewImage = useCallback((imageId: string) => {
    if (autoSelect) {
      setSelectedIds(prev => {
        const newSet = new Set(prev);
        newSet.add(imageId);
        return newSet;
      });
      
      // Mark as newly added for visual feedback
      setNewlyAddedIds(prev => {
        const newSet = new Set(prev);
        newSet.add(imageId);
        return newSet;
      });

      // Remove "new" highlight after animation
      setTimeout(() => {
        setNewlyAddedIds(prev => {
          const newSet = new Set(prev);
          newSet.delete(imageId);
          return newSet;
        });
      }, 2000);
    }
  }, [autoSelect]);

  // Handle file selection
  const handleFileSelect = useCallback((files: FileList | null) => {
    if (!files || files.length === 0) return;

    const imageFiles = Array.from(files).filter(file => 
      file.type.startsWith('image/')
    );

    const totalAfterAdd = images.length + imageFiles.length;
    if (totalAfterAdd > maxImages) {
      alert(`Maximum ${maxImages} images allowed. Please remove some images first.`);
      return;
    }

    // Check for duplicates
    const existingSrcs = new Set(images.map(img => img.src));
    const newImages: GalleryImage[] = [];
    let lastAddedId: string = '';

    imageFiles.forEach(file => {
      // Simple duplicate check by name
      const isDuplicate = images.some(img => img.name === file.name);
      if (isDuplicate) {
        console.warn(`Duplicate file detected: ${file.name}`);
        return;
      }

      const id = `img-${nextIdRef.current++}`;
      const objectUrl = URL.createObjectURL(file);
      
      const newImage: GalleryImage = {
        id,
        src: objectUrl,
        alt: file.name,
        name: file.name,
        isNew: true
      };
      
      newImages.push(newImage);
      lastAddedId = id;
    });

    if (newImages.length > 0) {
      const updatedImages = [...images, ...newImages];
      setImages(updatedImages);
      onImagesChange?.(updatedImages);

      // Auto-select newly added images
      if (autoSelect && lastAddedId) {
        autoSelectNewImage(lastAddedId);
      }
    }
  }, [images, maxImages, autoSelect, autoSelectNewImage, onImagesChange]);

  // Handle drag and drop
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileSelect(e.dataTransfer.files);
  }, [handleFileSelect]);

  // Handle click on drop zone
  const handleDropZoneClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  // Handle bulk selection of newly added images
  const handleBulkSelect = useCallback(() => {
    const newIds = images
      .filter(img => img.isNew)
      .map(img => img.id);
    
    setSelectedIds(prev => {
      const newSet = new Set(prev);
      newIds.forEach(id => newSet.add(id));
      return newSet;
    });

    // Clear "new" status for all
    setImages(prev => prev.map(img => ({ ...img, isNew: false })));
  }, [images]);

  // Toggle selection
  const toggleSelection = useCallback((id: string) => {
    setSelectedIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }, []);

  // Remove image
  const removeImage = useCallback((id: string) => {
    setImages(prev => prev.filter(img => img.id !== id));
    setSelectedIds(prev => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
    setNewlyAddedIds(prev => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
  }, []);

  // Clear all
  const clearAll = useCallback(() => {
    setImages([]);
    setSelectedIds(new Set());
    setNewlyAddedIds(new Set());
    onImagesChange?.([]);
  }, [onImagesChange]);

  // Clean up object URLs on unmount
  useEffect(() => {
    return () => {
      images.forEach(img => {
        if (img.src.startsWith('blob:')) {
          URL.revokeObjectURL(img.src);
        }
      });
    };
  }, []);

  return (
    <div className={`image-gallery ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <ImageIcon className="w-5 h-5 text-brand-purple" />
          <span className="font-medium">
            {images.length} image{images.length !== 1 ? 's' : ''}
            {selectedIds.size > 0 && ` (${selectedIds.size} selected)`}
          </span>
        </div>
        <div className="flex gap-2">
          {images.some(img => img.isNew) && (
            <button
              onClick={handleBulkSelect}
              className="px-3 py-1 text-sm bg-brand-purple/20 text-brand-purple rounded-lg hover:bg-brand-purple/30 transition-colors"
            >
              Select All New
            </button>
          )}
          {images.length > 0 && (
            <button
              onClick={clearAll}
              className="px-3 py-1 text-sm bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      {/* Drop Zone */}
      {allowUpload && (
        <div
          className={`
            relative border-2 border-dashed rounded-xl p-8 mb-4 text-center cursor-pointer
            transition-all duration-300
            ${isDragging 
              ? 'border-brand-purple bg-brand-purple/10 scale-[1.02]' 
              : 'border-neutral-700 hover:border-brand-purple/50 hover:bg-neutral-900/50'
            }
          `}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleDropZoneClick}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => handleFileSelect(e.target.files)}
          />
          <div className="flex flex-col items-center gap-3">
            <div className={`
              w-12 h-12 rounded-full flex items-center justify-center
              ${isDragging ? 'bg-brand-purple' : 'bg-neutral-800'}
              transition-colors duration-300
            `}>
              <Upload className={`w-6 h-6 ${isDragging ? 'text-white' : 'text-neutral-400'}`} />
            </div>
            <div>
              <p className="font-medium text-neutral-200">
                {isDragging ? 'Drop images here' : 'Drag & drop images or click to browse'}
              </p>
              <p className="text-sm text-neutral-500 mt-1">
                Supports JPG, PNG, GIF • Max {maxImages} images
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Image Grid */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          <AnimatePresence>
            {images.map((image) => {
              const isSelected = selectedIds.has(image.id);
              const isNewlyAdded = newlyAddedIds.has(image.id);
              const isNew = image.isNew;

              return (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className={`
                    relative group aspect-square rounded-lg overflow-hidden cursor-pointer
                    border-2 transition-all duration-300
                    ${isSelected 
                      ? 'border-brand-purple shadow-[0_0_15px_rgba(139,92,246,0.4)]' 
                      : 'border-transparent hover:border-neutral-600'
                    }
                    ${isNewlyAdded || isNew ? 'ring-2 ring-brand-purple-light ring-offset-2 ring-offset-black animate-pulse' : ''}
                  `}
                  onClick={() => toggleSelection(image.id)}
                >
                  {/* Image */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />

                  {/* Selection Overlay */}
                  <div className={`
                    absolute inset-0 flex items-center justify-center
                    transition-opacity duration-200
                    ${isSelected ? 'bg-brand-purple/30 opacity-100' : 'bg-black/50 opacity-0 group-hover:opacity-100'}
                  `}>
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-8 h-8 bg-brand-purple rounded-full flex items-center justify-center shadow-lg"
                      >
                        <Check className="w-5 h-5 text-white" />
                      </motion.div>
                    )}
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeImage(image.id);
                    }}
                    className={`
                      absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center
                      bg-black/60 text-white opacity-0 group-hover:opacity-100
                      hover:bg-red-500 transition-all duration-200
                    `}
                  >
                    <X className="w-4 h-4" />
                  </button>

                  {/* New Badge */}
                  {isNew && !isSelected && (
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-brand-purple text-white text-xs rounded-full font-medium">
                      NEW
                    </div>
                  )}

                  {/* Selection Checkmark (always visible when selected) */}
                  {isSelected && (
                    <div className="absolute bottom-2 right-2">
                      <div className="w-5 h-5 bg-brand-purple rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  )}

                  {/* Image Name */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-xs text-white truncate">{image.name}</p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}

      {/* Empty State */}
      {images.length === 0 && (
        <div className="text-center py-12 text-neutral-500">
          <ImageIcon className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>No images yet. Upload some to get started.</p>
        </div>
      )}

      {/* Screen Reader Announcements */}
      <div className="sr-only" role="status" aria-live="polite">
        {selectedIds.size > 0 
          ? `${selectedIds.size} image${selectedIds.size !== 1 ? 's' : ''} selected`
          : 'No images selected'
        }
      </div>
    </div>
  );
};

export default ImageGallery;
