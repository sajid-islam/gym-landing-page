import Link from 'next/link';

const Footer = () => {
  const socialMedia = [
    { name: 'Facebook', icon: 'Fb', link: '#' },
    { name: 'Instagram', icon: 'Ig', link: '#' },
    { name: 'Twitter', icon: 'Tw', link: '#' },
  ];

  const quickLinks = [
    { name: 'Home', link: '/' },
    { name: 'Our gym location', link: '#' },
    { name: 'Contact Us', link: '#' },
    { name: 'Privacy policy', link: '#' },
  ];

  const services = [
    { name: 'Indoor gym', link: '#' },
    { name: 'Outdoor gym', link: '#' },
    { name: 'On ground gym', link: '#' },
    { name: 'Yoga class', link: '#' },
  ];

  const contactInfo = [
    { label: 'Mail', value: 'info@example.com' },
    { label: 'Call', value: '+91 9876543210' },
    { label: 'Location', value: 'New York, 235 Lane, 10001' },
    { label: 'Time', value: 'Workout Hours: 5AM - 8PM' },
  ];

  return (
    <footer className="mt-20">
      <hr className="border-gray-200" />
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Column 1: About (Col-span 2) */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-xl font-bold text-black">About</h3>
            <p className="mb-8 max-w-md text-[15px] leading-relaxed text-gray-600">
              At MuscleForge, we believe in the power of dedication and hard work. Our mission is to
              provide you with the tools, resources, and community you need to build the body of
              your dreams
            </p>
            <hr className="mb-6 w-32 border-gray-300" />
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-black">Social Media:</span>
              <div className="flex items-center gap-3">
                {socialMedia.map((social) => (
                  <Link
                    key={social.name}
                    href={social.link}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all hover:bg-black hover:text-white"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-black">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.link} className="text-[15px] text-gray-600 hover:text-black">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Service */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-black">Our Service</h3>
            <ul className="flex flex-col gap-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.link} className="text-[15px] text-gray-600 hover:text-black">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-black">Contact Info</h3>
            <ul className="flex flex-col gap-2">
              {contactInfo.map((info) => (
                <li key={info.label} className="text-[15px]">
                  <span className="font-bold text-black">{info.label}:</span>{' '}
                  <span className="text-gray-600">{info.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pb-10">
        <hr className="mx-auto mb-10 max-w-lg border-gray-200" />
        <p className="text-center text-sm text-gray-500">websitename.com©2026 all right reserve</p>
      </div>
    </footer>
  );
};

export default Footer;
