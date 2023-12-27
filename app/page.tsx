import StarIcon from "@/components/StarIcon";
import HeartIcon from "@/components/HeartIcon";
import ShareIcon from "@/components/ShareIcon";
import ImageGalleryWrapper from "@/components/ImageGalleryWrapper";
import AboutWrapper from "@/components/AboutWrapper";
import DoctorsSection from "@/components/DoctorSection";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import ServicesList from "@/components/ExtraServices";
import PaymentMethods from "@/components/PaymentMethod";
import ReviewsList from "@/components/ReviewSection";

const dentalClinicImages: string[] = [
  "https://healthnet-rock.org/wp-content/uploads/Healthnet-146-HDR-Pano-scaled.jpg",
  "https://s42283.pcdn.co/wp-content/uploads/2020/09/dental-featured-image.jpg",
  "https://dental.pacific.edu/sites/default/files/styles/two_column_header_image/public/2022-07/dental_0044-1200.jpg?itok=giGeET_g",
  "https://mvc.edu/_resources/images/interior-full/class-dental-3.jpg",
  "https://cdn.dentaclinic.uk/wp-content/uploads/slider/cache/622c9636eb0f64b2deaa17248c8ec1e9/Denta_Clinic_London_img01.jpg",
  "https://xo-care.com/wp-content/uploads/2023/03/Dental-clinic-layout-header-1024x613.jpg",
  "https://media.oralhealthgroup.com/uploads/2020/02/ISCS-press-image-sinius.jpg",
  "https://images.ctfassets.net/kfkw517g6gvn/4I49n9FXlZGuDQY3b8SxHt/4ab5b0e4b8df6a43cd35616b2313c466/580A0044.jpg?fit=fill&w=1200&h=780",
  "https://www.amayadental.in/wp-content/uploads/2023/07/Banner-Image.jpg",
  "https://phuketsmiledental.com/images/dental-clinic.jpg",
];

const dentalBeforeAfterImages = [
  {
    before: "https://via.placeholder.com/300x200.png?text=Before+1",
    after: "https://via.placeholder.com/300x200.png?text=After+1",
  },
  {
    before: "https://via.placeholder.com/300x200.png?text=Before+2",
    after: "https://via.placeholder.com/300x200.png?text=After+2",
  },
  {
    before: "https://via.placeholder.com/300x200.png?text=Before+3",
    after: "https://via.placeholder.com/300x200.png?text=After+3",
  },
  {
    before: "https://via.placeholder.com/300x200.png?text=Before+4",
    after: "https://via.placeholder.com/300x200.png?text=After+4",
  },

  // ... more before-and-after pairs ...
];

export default function Home() {
  return (
    <div className="divide-y">
      <section className="padding">
        <div className="flex flex-col gap-2">
          <div className="">
            <h4 className="text-xl sm:text-2xl ">Sani Dental Group Playacar</h4>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row justify-between sm:gap-4 gap-2 text-xs text-slate-gray">
              <div className="flex gap-1">
                <StarIcon /> <p>5.00</p>
              </div>
              <div>
                <p>849 Reviews</p>
              </div>
              <div>
                <p>Playa del Carmen , Mexico</p>
              </div>
            </div>
            <div className="flex flex-row justify-between  gap-4 sm:gap-8">
              <ShareIcon />
              <HeartIcon />
            </div>
          </div>
        </div>
      </section>
      <section className="padding">
        <ImageGalleryWrapper images={dentalClinicImages} />
      </section>
      <section className="padding">
        <AboutWrapper />
      </section>
      <section className="padding">
        <DoctorsSection />
      </section>
      <section className="padding">
        <h2 className="text-xl  mb-6 mt-3">Before & After</h2>
        <BeforeAfterGallery images={dentalBeforeAfterImages} />
      </section>
      <section className="padding">
        <h2 className="text-xl  mb-6 mt-3">Additional Services</h2>
        <ServicesList />
      </section>
      <section className="padding">
        <h2 className="text-xl  mb-6 mt-3">Accepted Payment Methods</h2>
        <PaymentMethods />
      </section>
      <section className="padding">
        <ReviewsList />
      </section>
      <section className="padding">Map</section>
    </div>
  );
}
