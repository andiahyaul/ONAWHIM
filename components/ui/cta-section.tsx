import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  linktreeUrl?: string;
}

export function CTASection({
  title = "Ready to Explore More?",
  description = "Discover our complete collection and connect with us across all platforms.",
  buttonText = "Visit Our Linktree",
  linktreeUrl = "https://linktr.ee/onawhim._"
}: CTASectionProps) {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 rounded-3xl p-12 shadow-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-lg font-inter md:text-xl text-neutral-700 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r font-inter from-neutral-900 to-neutral-700 hover:from-neutral-800 hover:to-neutral-600 dark:from-neutral-100 dark:to-neutral-300 dark:hover:from-neutral-200 dark:hover:to-neutral-400 text-white dark:text-black font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={() => window.open(linktreeUrl, '_blank')}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}