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

<header class="mx-8">
  <h1 class="flex justify-between">
    <span class="uppercase align">Lush</span> <span>Survey</span>
  </h1>
  <p class="my-2">Answer the questions below provided on a scale from 1 to 5</p>
  <section class="flex my-8 justify-between md:justify-evenly content-center">
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

      <p class="hidden md:flex md:py-3">Strongly Disagree</p>
      <i class="hidden md:flex p-3 rounded-full mi mi-arrow-left" />
    </div>

    <div class="flex h-full m-auto">
      <i class="py-3 rounded-full mi mi-arrow-left" /><i
        class="py-3 mi mi-arrow-right row-start-3"
      />
    </div>
    <div
      class="grid w-full auto-rows-max text-center md:flex md:justify-between"
    >
      <i class="hidden md:flex p-3 mi mi-arrow-right row-start-3" />
      <span
        class="bg-black text-white m-auto text-center px-4 py-2 md:border rounded-full md:hidden font-bold text-2xl"
        >5</span
      >
      <span class="my-4 md:hidden">
        <p class="md:py-3">Strongly</p>
        <p class="md:py-3">Agree</p>
      </span>
      <p class="hidden py-3 md:flex">Strongly Agree</p>
      <span
        class="px-4 py-2 md:border rounded-full hidden p-2 font-bold text-2xl md:flex"
        >5</span
      >
    </div>
  </section>
</header>
<slot />
