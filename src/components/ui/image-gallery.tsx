
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  category?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  title?: string;
  className?: string;
}

export const ImageGallery = ({ images, title, className = "" }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };
  
  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };
  
  return (
    <div className={`space-y-4 ${className}`}>
      {title && <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <Card key={index} className="overflow-hidden animate-on-scroll hover:shadow-md transition-all">
            <CardContent className="p-0 cursor-pointer" onClick={() => setSelectedImage(index)}>
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              {image.caption && (
                <div className="p-3">
                  <p className="text-sm text-gray-700">{image.caption}</p>
                  {image.category && (
                    <span className="inline-block mt-1 text-xs bg-eee-purple/20 text-eee-purple px-2 py-1 rounded-full">
                      {image.category}
                    </span>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Image viewer dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl min-h-[60vh] flex flex-col p-0">
          {selectedImage !== null && (
            <>
              <DialogHeader className="p-4">
                <DialogTitle>
                  {images[selectedImage]?.caption || "Image Gallery"}
                </DialogTitle>
              </DialogHeader>
              <div className="flex-1 relative flex items-center justify-center bg-black/5">
                <img 
                  src={images[selectedImage]?.src} 
                  alt={images[selectedImage]?.alt} 
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1/2 -translate-y-1/2 left-2 bg-white/80 hover:bg-white rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevious();
                  }}
                >
                  <ChevronLeft className="h-6 w-6" />
                  <span className="sr-only">Previous</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1/2 -translate-y-1/2 right-2 bg-white/80 hover:bg-white rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                >
                  <ChevronRight className="h-6 w-6" />
                  <span className="sr-only">Next</span>
                </Button>
              </div>
              {images[selectedImage]?.caption && (
                <div className="p-4 bg-white">
                  <p>{images[selectedImage].caption}</p>
                  {images[selectedImage].category && (
                    <span className="inline-block mt-2 text-sm bg-eee-purple/20 text-eee-purple px-2 py-1 rounded-full">
                      {images[selectedImage].category}
                    </span>
                  )}
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
