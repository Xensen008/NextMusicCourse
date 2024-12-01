'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Newsletter', href: '/newsletter' },
        { name: 'Events', href: '/events' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy', href: '/privacy' },
        { name: 'Terms', href: '/terms' },
        { name: 'Copyright', href: '/copyright' },
      ],
    },
  ];

  return (
    <footer className="bg-dark-gradient py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gradient">MusicMaster</h2>
            <p className="text-neutral-400 text-sm">
              Empowering musicians worldwide through expert education and community.
            </p>
          </div>
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-neutral-200">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-neutral-400 hover:text-neutral-200 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-neutral-800 text-center text-neutral-400 text-sm"
        >
          <p>&copy; {new Date().getFullYear()} MusicMaster. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
