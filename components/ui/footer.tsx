interface FooterProps {
  instagramUrl?: string;
  tiktokUrl?: string;
}

export function Footer({
  instagramUrl = "https://instagram.com/onawhim._",
  tiktokUrl = "https://tiktok.com/@onawhim._"
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Brand Name */}
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Onawhim._
          </h3>
          
          {/* Social Media Links */}
          <div className="flex items-center space-x-6">
            {/* Instagram */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all duration-300"
              aria-label="Follow us on Instagram"
            >
              <svg
                className="w-6 h-6 text-neutral-600 dark:text-neutral-400 group-hover:text-pink-500 transition-colors duration-300 group-hover:scale-110 transform"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12.017 0C8.396 0 7.971.01 6.74.048 5.51.087 4.69.22 3.999.42c-.707.204-1.308.478-1.908.789-.6.31-1.108.72-1.609 1.219C.072 2.928-.203 3.529-.407 4.236c-.2.69-.333 1.512-.372 2.741C-.048 8.208-.037 8.633-.037 12.253c0 3.62-.01 4.046.048 5.277.039 1.229.172 2.051.372 2.741.204.707.478 1.308.789 1.908.31.6.72 1.108 1.219 1.609.5.5 1.101.775 1.808.979.69.2 1.512.333 2.741.372 1.231.039 1.656.048 5.277.048 3.62 0 4.046.01 5.277-.048 1.229-.039 2.051-.172 2.741-.372.707-.204 1.308-.478 1.908-.789.6-.31 1.108-.72 1.609-1.219.5-.5.775-1.101.979-1.808.2-.69.333-1.512.372-2.741.039-1.231.048-1.656.048-5.277 0-3.62-.01-4.046-.048-5.277-.039-1.229-.172-2.051-.372-2.741-.204-.707-.478-1.308-.789-1.908-.31-.6-.72-1.108-1.219-1.609C19.928.072 19.327-.203 18.62-.407c-.69-.2-1.512-.333-2.741-.372C14.648-.048 14.223-.037 10.603-.037L12.017 0zm0 2.158c3.556 0 3.98.01 5.383.048 1.3.06 2.003.277 2.473.46.622.242 1.066.532 1.532.998.466.466.756.91.998 1.532.183.47.4 1.173.46 2.473.038 1.403.047 1.827.047 5.383 0 3.556-.01 3.98-.048 5.383-.06 1.3-.277 2.003-.46 2.473-.242.622-.532 1.066-.998 1.532-.466.466-.91.756-1.532.998-.47.183-1.173.4-2.473.46-1.403.038-1.827.047-5.383.047-3.556 0-3.98-.01-5.383-.048-1.3-.06-2.003-.277-2.473-.46-.622-.242-1.066-.532-1.532-.998-.466-.466-.756-.91-.998-1.532-.183-.47-.4-1.173-.46-2.473C2.168 15.997 2.158 15.573 2.158 12.017c0-3.556.01-3.98.048-5.383.06-1.3.277-2.003.46-2.473.242-.622.532-1.066.998-1.532.466-.466.91-.756 1.532-.998.47-.183 1.173-.4 2.473-.46C8.037 2.168 8.461 2.158 12.017 2.158z"/>
                <path d="M12.017 15.33c-1.797 0-3.273-1.476-3.273-3.273s1.476-3.273 3.273-3.273 3.273 1.476 3.273 3.273-1.476 3.273-3.273 3.273zM12.017 6.415c-3.094 0-5.642 2.548-5.642 5.642s2.548 5.642 5.642 5.642 5.642-2.548 5.642-5.642-2.548-5.642-5.642-5.642z"/>
                <circle cx="17.965" cy="6.108" r="1.32"/>
              </svg>
            </a>

            {/* TikTok */}
            <a
              href={tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all duration-300"
              aria-label="Follow us on TikTok"
            >
              <svg
                className="w-6 h-6 text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-300 group-hover:scale-110 transform"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm font-inter text-neutral-500 dark:text-neutral-400">
              © {currentYear} Onawhim. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}