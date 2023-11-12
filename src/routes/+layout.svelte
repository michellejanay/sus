<script>
  import "../app.css";

  // export let test;
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css"
  />
</svelte:head>

<header class="px-8 sticky top-0 bg-white border-b-[4em]">
  <h1 class="flex justify-between">
    <span class="uppercase align">Lush</span> <span>Survey</span>
  </h1>
  <p class="my-2">Answer the questions below provided on a scale from 1 to 5</p>
  <section class="flex my-8 justify-between md:justify-evenly content-center">
    <!-- 1 -->
    <div
      class="grid w-full auto-rows-max text-center md:flex md:justify-between"
    >
      <p class="hidden px-5 py-2 md:border rounded-full font-bold text-2xl">
        1
      </p>
      <p
        class="bg-black text-white md:bg-white md:text-black m-auto text-center px-5 py-2 md:border rounded-full font-bold text-2xl"
      >
        1
      </p>
      <span class="my-4 md:hidden">
        <p class="md:py-3">Strongly</p>
        <p class="md:py-3">Disagree</p>
      </span>

      <p class="hidden md:flex md:py-3 md:px-8">Strongly Disagree</p>

      <!-- icon -->
      <i class="hidden md:flex p-3 rounded-full mi mi-arrow-left md:hidden" />
    </div>
    <div class="mx-8" />
    <!-- 5 -->
    <div class="flex h-full m-auto">
      <!-- icon -->
      <i class="py-3 rounded-full mi mi-arrow-left md:hidden" /><i
        class="py-3 mi mi-arrow-right row-start-3 md:hidden"
      />
    </div>

    <div
      class="grid w-full auto-rows-max text-center md:flex md:mx-24 md:justify-between"
    >
      <i
        class="hidden md:flex p-3 mi mi-arrow-right row-start-3 md:hidden ld:hidden"
      />
      <span
        class="bg-black text-white m-auto text-center px-4 py-2 md:border rounded-full md:hidden font-bold text-2xl"
        >5</span
      >
      <span class="my-4 md:hidden">
        <p class="md:py-3">Strongly</p>
        <p class="md:py-3">Agree</p>
      </span>
      <p class="hidden py-3 md:flex md:mx-24">Strongly Agree</p>
      <span
        class="px-4 py-2 rounded-full hidden p-2 font-bold text-2xl md:flex md:border"
        >5</span
      >
    </div>
  </section>
</header>
<main class="m-auto">
  <slot />
</main>
