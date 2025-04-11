import { motion, AnimatePresence } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';

interface ModalImageProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  alt: string;
}

const ModalImage: React.FC<ModalImageProps> = ({ isOpen, onClose, imageUrl, alt }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-80 p-4"
        onClick={onClose}>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ type: 'spring', damping: 20 }}
          className="relative max-h-[95vh] max-w-[95vw]"
          onClick={(e) => e.stopPropagation()}>
          <button
            onClick={onClose}
            className="absolute -right-4 -top-4 rounded-full bg-white p-2 text-gray-800 shadow-lg transition-colors hover:bg-gray-100">
            <IoMdClose size={24} />
          </button>
          <img
            src={imageUrl}
            alt={alt}
            className="h-auto max-h-[95vh] max-w-[95vw] rounded-lg object-contain shadow-xl"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ModalImage;
