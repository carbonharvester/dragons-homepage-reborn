
import React from 'react';
import { Dialog, DialogContent, DialogOverlay } from './dialog';
import { X } from 'lucide-react';

interface ImageDialogProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

const ImageDialog: React.FC<ImageDialogProps> = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
        <div className="relative w-full">
          <button 
            className="absolute top-2 right-2 z-10 p-2 bg-black/60 rounded-full text-white hover:bg-black/80 transition-colors"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="flex items-center justify-center bg-black/50 p-1 rounded-lg">
            <img 
              src={imageSrc} 
              alt={imageAlt} 
              className="max-h-[80vh] max-w-full object-contain" 
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageDialog;
