import { BookOpen } from "lucide-react";
import { SiInstagram, SiLinkedin, SiX, SiYoutube } from "react-icons/si";

const FOOTER_LINKS = {
  Explore: [
    "All Courses",
    "Featured",
    "New Releases",
    "Free Courses",
    "Certifications",
  ],
  Company: ["About Us", "Careers", "Blog", "Press", "Partners"],
  Support: [
    "Help Center",
    "Contact Us",
    "Community",
    "Privacy Policy",
    "Accessibility",
  ],
};

const SOCIAL_LINKS = [
  { icon: SiX, label: "X", href: "https://x.com" },
  { icon: SiLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: SiInstagram, label: "Instagram", href: "https://instagram.com" },
  { icon: SiYoutube, label: "YouTube", href: "https://youtube.com" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold">EduLearn</span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              Empowering learners worldwide with expert-led courses and
              real-world skills.
            </p>
            <div className="flex gap-4 mt-6">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  data-ocid="footer.link"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/80 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
                {section}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                      data-ocid="footer.link"
                      className="text-sm text-white/50 hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>
            © {year}. Built with ❤️ using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              caffeine.ai
            </a>
          </span>
          <div className="flex gap-6">
            <a href="#terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
