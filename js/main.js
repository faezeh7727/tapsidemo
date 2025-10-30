const accordions = document.querySelectorAll(".accordion");

accordions.forEach((item) => {
  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {
    // بستن همه آکاردیون‌ها
    accordions.forEach((acc) => {
      if (acc !== item) acc.classList.remove("accordion-expanded");
    });

    // باز یا بسته کردن فقط آکاردیون فعلی
    item.classList.toggle("accordion-expanded");
  });
});
