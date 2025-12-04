import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:mohithivare2@gmail.com',
      label: t('contact.email'),
    },
    {
      name: 'Contact',
      icon: FaPhone,
      url: 'tel:9922782875',
      label: t('contact.phone'),
    },
  ];

  return (
    <section id="contact" className="py-20 px-8 bg-gradient-to-b from-bg-primary to-bg-secondary relative">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-br from-accent via-accent-hover to-[#a855f7] bg-clip-text text-transparent tracking-tight relative leading-[1.2] py-2 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-accent after:to-accent-hover after:rounded-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('contact.title')}
        </motion.h2>

        <motion.p
          className="text-xl text-text-secondary text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('contact.subtitle')}
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-white/5 dark:bg-black/5 backdrop-blur-md rounded-2xl border-2 border-white/10 dark:border-black/10 text-text-primary transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/25 hover:bg-white/8 dark:hover:bg-black/8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                aria-label={link.label}
              >
                <Icon className="text-2xl" />
                <span className="font-semibold">{link.label}</span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;

