import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
/**
 * Swiper configuration options including navigation, pagination, scrollbar, and accessibility modules. 
 * It enables autoplay with a delay, adjusts space between slides, and provides breakpoints for responsiveness.
 */
export const SwiperConfig = (directionType:any) => ({
  modules: [Navigation, Pagination, Scrollbar, A11y],
  direction:directionType, // Set direction to vertical for column layout
  initialSlide: 0,
  spaceBetween: 5, // Adjust the space between cards here
  slidesPerView: "auto" as const,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  allowTouchMove: true,
  breakpoints: {
    900: {
      autoplay: false,
      spaceBetween: 5, // Adjust the space between cards for larger screens if needed
      slidesPerView: "auto" as const,
    },
  },
  watchOverflow: true,
});
