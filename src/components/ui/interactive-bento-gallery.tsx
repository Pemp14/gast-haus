"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react';

// MediaItemType defines the structure of a media item
interface MediaItemType {
    id: number;
    type: string;
    title: string;
    desc: string;
    url: string;
    span: string;
}

// MediaItem component renders images only
const MediaItem = ({ item, className, onClick }: { item: MediaItemType, className?: string, onClick?: () => void }) => {
    return (
        <img
            src={item.url}
            alt={item.title}
            className={`${className} object-cover cursor-pointer`}
            onClick={onClick}
            loading="lazy"
            decoding="async"
        />
    );
};

// GalleryModal component displays the selected media item in a modal
interface GalleryModalProps {
    selectedItem: MediaItemType;
    isOpen: boolean;
    onClose: () => void;
    setSelectedItem: (item: MediaItemType | null) => void;
    mediaItems: MediaItemType[];
}

const GalleryModal = ({ selectedItem, isOpen, onClose, setSelectedItem, mediaItems }: GalleryModalProps) => {
    const [dockPosition, setDockPosition] = useState({ x: 0, y: 0 });

    // Disable scroll when modal is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const currentIndex = mediaItems.findIndex(item => item.id === selectedItem.id);
    
    const nextImage = () => {
        const nextIndex = (currentIndex + 1) % mediaItems.length;
        setSelectedItem(mediaItems[nextIndex]);
    };
    
    const prevImage = () => {
        const prevIndex = currentIndex === 0 ? mediaItems.length - 1 : currentIndex - 1;
        setSelectedItem(mediaItems[prevIndex]);
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Main Modal */}
            <motion.div
                initial={{ scale: 0.98 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.98 }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30
                }}
                className="fixed inset-0 w-full min-h-screen sm:h-[90vh] md:h-[600px] backdrop-blur-lg 
                          rounded-none sm:rounded-lg md:rounded-xl overflow-hidden z-10"
                style={{
                    backgroundImage: `url(${selectedItem.url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Blurred background overlay */}
                <div className="absolute inset-0 backdrop-blur-3xl bg-black/30"></div>
                
                {/* Decorative particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-white/20 rounded-full"
                            style={{
                                left: `${20 + i * 15}%`,
                                top: `${30 + (i % 2) * 40}%`,
                            }}
                            animate={{
                                y: [-10, 10, -10],
                                opacity: [0.3, 0.7, 0.3],
                            }}
                            transition={{
                                duration: 3 + i * 0.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>
                
                {/* Main Content */}
                <div className="h-full flex flex-col relative z-10">
                    <div className="flex-1 p-2 sm:p-3 md:p-4 flex items-center justify-center bg-gray-50/50">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedItem.id}
                                className="relative z-20 w-full aspect-[16/9] max-w-[95%] sm:max-w-[85%] md:max-w-3xl 
                                         h-auto max-h-[70vh] rounded-lg overflow-hidden shadow-md"
                                initial={{ y: 20, scale: 0.97 }}
                                animate={{
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 30,
                                        mass: 0.5
                                    }
                                }}
                                exit={{
                                    y: 20,
                                    scale: 0.97,
                                    transition: { duration: 0.15 }
                                }}
                                onClick={onClose}
                            >
                                <MediaItem item={selectedItem} className="w-full h-full object-contain bg-gray-900/20" onClick={onClose} />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    
                    {/* Compact Counter under photo */}
                    <motion.div
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg">
                            <span className="text-gray-800 font-medium text-sm">
                                {currentIndex + 1}/{mediaItems.length}
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* Navigation Arrows */}
                <motion.button
                    onClick={prevImage}
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 
                             p-2 sm:p-3 bg-black/40 backdrop-blur-sm rounded-full text-white 
                             hover:bg-black/50 transition-all duration-300 z-30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </motion.button>

                <motion.button
                    onClick={nextImage}
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 
                             p-2 sm:p-3 bg-black/40 backdrop-blur-sm rounded-full text-white 
                             hover:bg-black/50 transition-all duration-300 z-30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </motion.button>

                {/* Close Button */}
                <motion.button
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 z-[60]
                              p-2 rounded-full bg-white/90 backdrop-blur-sm text-gray-800 
                              hover:bg-white transition-all duration-300 shadow-lg border border-gray-200/50"
                    onClick={onClose}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <X className="w-5 h-5" />
                </motion.button>
            </motion.div>

            {/* Draggable Dock */}
            <motion.div
                drag
                dragMomentum={false}
                dragElastic={0.1}
                initial={false}
                animate={{ x: dockPosition.x, y: dockPosition.y }}
                onDragEnd={(_, info) => {
                    setDockPosition(prev => ({
                        x: prev.x + info.offset.x,
                        y: prev.y + info.offset.y
                    }));
                }}
                className="absolute z-50 bottom-4 left-1/2 transform -translate-x-1/2 touch-none"
                style={{ 
                    transform: `translateX(calc(-50% + ${dockPosition.x}px)) translateY(${dockPosition.y}px)`
                }}
            >
                <motion.div
                    className="rounded-xl bg-green-400/20 backdrop-blur-xl 
                             border border-green-400/30 shadow-lg
                             cursor-grab active:cursor-grabbing
                             max-w-[90vw] overflow-x-auto"
                >
                    <div className="flex items-center -space-x-1 sm:-space-x-2 px-2 sm:px-3 py-2">
                        {mediaItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedItem(item);
                                }}
                                style={{
                                    zIndex: selectedItem.id === item.id ? 30 : mediaItems.length - index,
                                }}
                                className={`
                                    relative group
                                    w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 flex-shrink-0 
                                    rounded-lg overflow-hidden 
                                    cursor-pointer hover:z-20
                                    ${selectedItem.id === item.id
                                        ? 'ring-2 ring-white/70 shadow-lg'
                                        : 'hover:ring-2 hover:ring-white/30'}
                                `}
                                initial={{ rotate: index % 2 === 0 ? -15 : 15 }}
                                animate={{
                                    scale: selectedItem.id === item.id ? 1.2 : 1,
                                    rotate: selectedItem.id === item.id ? 0 : index % 2 === 0 ? -15 : 15,
                                    y: selectedItem.id === item.id ? -8 : 0,
                                }}
                                whileHover={{
                                    scale: 1.3,
                                    rotate: 0,
                                    y: -10,
                                    transition: { type: "spring", stiffness: 400, damping: 25 }
                                }}
                            >
                                <MediaItem item={item} className="w-full h-full" onClick={() => setSelectedItem(item)} />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/20" />
                                {selectedItem.id === item.id && (
                                    <motion.div
                                        layoutId="activeGlow"
                                        className="absolute -inset-2 bg-white/20 blur-xl"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
};

interface InteractiveBentoGalleryProps {
    mediaItems: MediaItemType[]
    title: string
    description: string
}

const InteractiveBentoGallery: React.FC<InteractiveBentoGalleryProps> = ({ mediaItems, title, description }) => {
    const [selectedItem, setSelectedItem] = useState<MediaItemType | null>(null);
    const [items, setItems] = useState(mediaItems);
    const [isDragging, setIsDragging] = useState(false);

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="mb-8 text-center">
                <motion.h1
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal font-serif"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {title}
                </motion.h1>
                <motion.p
                    className="mt-2 text-sm sm:text-base text-warm-gray"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {description}
                </motion.p>
            </div>
            <AnimatePresence mode="wait">
                {selectedItem ? (
                    <GalleryModal
                        selectedItem={selectedItem}
                        isOpen={true}
                        onClose={() => setSelectedItem(null)}
                        setSelectedItem={setSelectedItem}
                        mediaItems={items}
                    />
                ) : (
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 auto-rows-[60px]"
                        className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 auto-rows-[250px] sm:auto-rows-[60px]"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1 }
                            }
                        }}
                    >
                        {items.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layoutId={`media-${item.id}`}
                                className={`relative overflow-hidden rounded-xl cursor-move ${window.innerWidth < 640 ? 'col-span-1 row-span-1 aspect-[4/3]' : item.span}`}
                                onClick={() => !isDragging && setSelectedItem(item)}
                                variants={{
                                    hidden: { y: 50, scale: 0.9, opacity: 0 },
                                    visible: {
                                        y: 0,
                                        scale: 1,
                                        opacity: 1,
                                        transition: {
                                            type: "spring",
                                            stiffness: 350,
                                            damping: 25,
                                            delay: index * 0.05
                                        }
                                    }
                                }}
                                whileHover={{ scale: 1.02 }}
                                drag
                                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                                dragElastic={1}
                               dragEnabled={window.innerWidth >= 640}
                                onDragStart={() => setIsDragging(true)}
                                onDragEnd={(e, info) => {
                                    setIsDragging(false);
                                    if (window.innerWidth >= 640) {
                                        const moveDistance = info.offset.x + info.offset.y;
                                        if (Math.abs(moveDistance) > 50) {
                                            const newItems = [...items];
                                            const draggedItem = newItems[index];
                                            const targetIndex = moveDistance > 0 ?
                                                Math.min(index + 1, items.length - 1) :
                                                Math.max(index - 1, 0);
                                            newItems.splice(index, 1);
                                            newItems.splice(targetIndex, 0, draggedItem);
                                            setItems(newItems);
                                        }
                                    }
                                }}
                            >
                                <MediaItem
                                    item={item}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    onClick={() => !isDragging && setSelectedItem(item)}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default InteractiveBentoGallery