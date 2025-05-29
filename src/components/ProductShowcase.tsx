import React from 'react';
import { Link } from 'react-router-dom';

const overlayBase =
  'absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-300 rounded-lg pb-8'; // text at bottom
const overlayHover = 'group-hover:opacity-100 bg-white bg-opacity-60';
const overlayText =
  'text-white font-bold text-center text-xl sm:text-2xl px-6 z-10 drop-shadow-2xl tracking-wide leading-relaxed';

const ProductShowcase = () => {
  return (
    <section className="bg-black text-white py-0 flex justify-center items-center min-h-screen w-screen">
      <div className="bg-black flex flex-col items-center justify-center mx-auto px-4 w-full max-w-7xl min-h-[90vh]">
        {/* Top row: Frame 3 and Frame 18 */}
        <div className="flex flex-row w-full justify-end gap-[42px] mb-[21px]">
          <div className="relative overflow-hidden rounded-lg" style={{ width: '95.33%', height: '477px', maxHeight: '477px' }}>
            <img
              src="/Frame 3.png"
              alt="Frame 3"
              className="w-full h-full object-cover bg-transparent"
              style={{ width: '100%', height: '100%' }}
            />
            {/* No overlay for Frame 3 */}
          </div>
          <div className="relative group overflow-hidden rounded-lg" style={{ width: '40%', height: '477px', maxHeight: '477px', marginRight: '-96px' }}>
            <img
              src="/Frame 18.png"
              alt="Frame 18"
              className="w-full h-full object-cover bg-transparent"
              style={{ width: '100%', height: '100%' }}
            />
            <div className={`${overlayBase} ${overlayHover}`}>
              <span
                className={overlayText}
                style={{
                  fontSize: '150%',
                  letterSpacing: '0.04em',
                  textShadow: '0 4px 24px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.5)',
                  fontWeight: 600,
                  lineHeight: 1.4,
                  textTransform: 'none',
                }}
              >
                Premium wool blend in signature Vermilion.
              </span>
            </div>
          </div>
        </div>
        {/* Bottom row: Frame 18(1), Frame 18(2), Frame 19 */}
        <div className="flex flex-row w-full justify-center gap-[96px] mt-[2px]">
          <div
            className="relative group overflow-hidden rounded-lg"
            style={{
              marginLeft: '60px',
              width: '405.45px',
              height: '405.45px',
              minWidth: '405.45px',
              minHeight: '405.45px',
              aspectRatio: '1 / 1',
              boxSizing: 'border-box',
            }}
          >
            <img
              src="/Frame 18 (1).png"
              alt="Frame 18(1)"
              className="w-full h-full object-cover bg-transparent"
              style={{ width: '100%', height: '100%' }}
            />
            <div className={`${overlayBase} ${overlayHover}`}>
              <span
                className={overlayText}
                style={{
                  fontSize: '150%',
                  letterSpacing: '0.04em',
                  textShadow: '0 4px 24px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.5)',
                  fontWeight: 600,
                  lineHeight: 1.4,
                  textTransform: 'none',
                }}
              >
                Discreet side pockets with clean finish
              </span>
            </div>
          </div>
          <div
            className="relative group overflow-hidden rounded-lg"
            style={{
              width: '405.45px',
              height: '405.45px',
              minWidth: '405.45px',
              minHeight: '405.45px',
              aspectRatio: '1 / 1',
              boxSizing: 'border-box',
            }}
          >
            <img
              src="/Frame 18 (2).png"
              alt="Frame 18(2)"
              className="w-full h-full object-cover bg-transparent"
              style={{ width: '100%', height: '100%' }}
            />
            <div className={`${overlayBase} ${overlayHover}`}>
              <span
                className={overlayText}
                style={{
                  fontSize: '150%',
                  letterSpacing: '0.04em',
                  textShadow: '0 4px 24px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.5)',
                  fontWeight: 600,
                  lineHeight: 1.4,
                  textTransform: 'none',
                }}
              >
                Hand-cut and assembled in small batches
              </span>
            </div>
          </div>
          <div
            className="relative group overflow-hidden rounded-lg"
            style={{
              width: '405.45px',
              height: '405.45px',
              minWidth: '405.45px',
              minHeight: '405.45px',
              aspectRatio: '1 / 1',
              boxSizing: 'border-box',
            }}
          >
            <img
              src="/Frame 19.png"
              alt="Frame 19"
              className="w-full h-full object-cover bg-transparent"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-80 transition-opacity duration-300 rounded-lg pb-8">
              <span
                className={overlayText}
                style={{
                  fontSize: '150%',
                  letterSpacing: '0.04em',
                  textShadow: '0 4px 24px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.5)',
                  fontWeight: 700,
                  lineHeight: 1.4,
                  textTransform: 'uppercase',
                }}
              >
                Eclypse
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
