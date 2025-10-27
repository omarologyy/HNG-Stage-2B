<script setup>
import { ref } from "vue";
import Swal from "sweetalert2";

let email = ref("");
let emailError = ref(false);
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let handleSubmit = () => {
  if (!email.value || !emailRegex.test(email.value)) {
    emailError.value = true;
  } else {
    console.log(emailRegex.test(email.value));
    Swal.fire({
      icon: "success",
      title: "Thank You",
      text: `${email.value} subscribed to our newsletter!`,
    });
  }
};
</script>

<template>
  <!-- Newsletter Section Start -->
  <div className="md:hidden lg:flex flex-col">
    <div className="flex flex-row justify-between items-start p-8">
      <div className="flex flex-col space-y-8 p-4">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Tick<span className="text-purple-600">r</span>
        </h2>
        <div className="text-sm space-y-2">
          <p>hello@tickr.com</p>
          <p>(+234) 123 990 8000</p>
        </div>
      </div>

      <div className="space-x-12 flex flex-row flex-1 justify-end p-4">
        <div className="space-y-1">
          <h1 className="font-bold mb-3 text-[#2E5C38]">Company</h1>
          <div className="text-gray-400 text-sm cursor-pointer space-y-1">
            <p>Blog</p>
            <p>Career</p>
            <p>Pricing</p>
          </div>
        </div>

        <div className="space-y-1">
          <h1 className="font-bold mb-3 text-[#2E5C38]">Resources</h1>
          <div className="text-gray-400 text-sm cursor-pointer space-y-1">
            <p>Documentations</p>
            <p>Papers</p>
            <p>Press Conferences</p>
          </div>
        </div>

        <div className="space-y-1">
          <h1 className="font-bold mb-3 text-[#2E5C38]">Legal</h1>
          <div className="text-gray-400 text-sm cursor-pointer space-y-1">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Data Processing</p>
          </div>
        </div>
      </div>
    </div>

    <div
      className="w-full h-0.5 bg-linear-to- from-transparent via-gray-500 to-transparent"
    />
  </div>

  <div
    class="md:place-self-end text-start justify-between items-center flex flex-row space-x-8 p-4"
  >
    <p className="text-gray-400">© 2025 Tickr Inc.</p>
    <ul class="flex space-x-8 items-center">
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          fill="currentColor"
          class="bi bi-facebook text-black hover:text-theme-secondary transition duration-200 cursor-pointer"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
          />
        </svg>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          fill="currentColor"
          class="bi bi-instagram text-black hover:text-theme-secondary transition duration-200 cursor-pointer"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.429a3.5 3.5 0 0 0-1.42 1.421c-.207.51-.342 1.09-.381 1.943C.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.849.175 1.43.381 1.943a3.5 3.5 0 0 0 1.42 1.42c.51.206 1.09.342 1.943.38c.854.037 1.126.069 3.297.069s2.444-.01 3.297-.048c.852-.04 1.432-.175 1.943-.381a3.5 3.5 0 0 0 1.42-1.42c.206-.51.342-1.09.38-1.943.036-.855.069-1.127.069-3.297s-.01-2.445-.048-3.297c-.04-.852-.175-1.432-.381-1.943a3.5 3.5 0 0 0-1.42-1.421c-.51-.206-1.09-.342-1.943-.381C10.444.01 10.172 0 8 0zm0 2.163c2.71 0 3.056.01 4.123.064.853.042 1.348.172 1.735.328.379.146.699.317.92.538.22.22.392.54.538.921.157.387.286.882.328 1.735.054 1.066.064 1.414.064 4.123s-.01 3.056-.064 4.123c-.042.853-.172 1.348-.328 1.735a2.47 2.47 0 0 1-.538.921c-.22.22-.392.54-.538.92-.157.388-.286.883-.328 1.736-.054 1.066-.064 1.414-.064 4.125s.01 3.052.064 4.123c.042.853.172 1.348.328 1.734.146.388.317.699.538.921.22.22.54.392.92.538.387.157.882.286 1.735.328 1.066.054 1.414.064 4.123.064s3.056-.01 4.123-.064c.853-.042 1.348-.172 1.735-.328.379-.146.699-.317.92-.538.22-.22.392-.54.538-.92.157-.387.286-.882.328-1.735.054-1.066.064-1.414.064-4.123s-.01-3.052-.064-4.123c-.04-1.066-.172-1.56-.328-1.947a2.53 2.53 0 0 1-.538-.921c-.22-.22-.54-.392-.92-.538-.387-.157-.882-.286-1.735-.328C11.056 2.172 10.708 2.163 8 2.163zM8 5.838a2.162 2.162 0 1 0 0 4.324 2.162 2.162 0 0 0 0-4.324zm0 6.642a4.48 4.48 0 1 1 0-8.96 4.48 4.48 0 0 1 0 8.96zm6.532-8.995a1.18 1.18 0 1 0 0 2.36 1.18 1.18 0 0 0 0-2.36z"
          />
        </svg>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          fill="currentColor"
          class="bi bi-twitter text-black hover:text-theme-secondary transition duration-200 cursor-pointer"
          viewBox="0 0 16 16"
        >
          <path
            d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
          />
        </svg>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          fill="currentColor"
          class="bi bi-twitter text-black hover:text-theme-secondary transition duration-200 cursor-pointer"
          viewBox="0 0 16 16"
        >
          <path
            d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"
          />
        </svg>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          fill="currentColor"
          class="bi bi-linkedin text-black hover:text-theme-secondary transition duration-200 cursor-pointer"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.55 1.358-1.243-.004-.707-.525-1.243-1.357-1.243-.835 0-1.358.536-1.358 1.243 0 .693.523 1.243 1.358 1.243zm4.943 8.212V9.359c0-.236.014-.44.08-.586.173-.356.521-.716 1.26-1.228.914-.666 2.05-1.4 3.04-1.4c.668 0 1.108.064 1.737.362 1.344.73 2.032 2.41 2.032 4.909v4.545h-2.427V9.739c0-.857-.275-1.442-.968-1.442-.712 0-1.009.431-1.17 1.042-.15.54-.183 1.24-.183 2.128v4.298h-2.435z"
          />
        </svg>
      </li>
    </ul>
  </div>
  <!-- Newsletter Section End -->
</template>
