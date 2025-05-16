const footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-10 border-t border-gray-200">
      <p className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </p>
    </footer>
  );
};

export default footer;