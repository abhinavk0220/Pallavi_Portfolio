
const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-pink-500/20">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Pallavi Kumari. Built with React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;