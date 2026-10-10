import gallery1 from "../assets/images/gallery1.png";
import gallery2 from "../assets/images/gallery2.png";
import gallery3 from "../assets/images/gallery3.png";
import gallery4 from "../assets/images/gallery4.png";
import gallery5 from "../assets/images/gallery5.png";
import gallery6 from "../assets/images/gallery6.png";
import gallery7 from "../assets/images/gallery7.png";
import gallery8 from "../assets/images/gallery8.png";

const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
];

function Gallery() {
  return (
    <section className="max-w-3xl mx-auto px-4 pb-16">
      <p className="text-indigo-600 font-medium text-center mb-6">
        My photos
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {galleryImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery photo ${index + 1}`}
            className="w-full h-32 object-cover rounded"
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;