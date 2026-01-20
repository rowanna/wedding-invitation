import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import "./index.css";

const app = createApp(App);

// 'reveal'이라는 이름의 디렉티브 등록
app.directive("reveal", {
  mounted(el: HTMLElement) {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px 0px -33% 0px",
      threshold: 0.1,
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-down");
        } else {
          entry.target.classList.remove("fade-down");
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);

    // 요소가 사라질 때 메모리 해제를 위해 observer 참조를 요소에 임시 저장
    (el as any)._observer = observer;
  },
  unmounted(el: HTMLElement) {
    // 컴포넌트가 파괴될 때 관찰 중단
    if ((el as any)._observer) {
      (el as any)._observer.disconnect();
    }
  },
});
app.use(createPinia());

app.mount("#app");
