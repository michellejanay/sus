<script>
  const numbers = [1, 2, 3, 4, 5];

  const responses = {};

  //todo bind values

  // const updateResponses = (questionN, value){
  //   responses[questionN] = value;
  // }

  const survey = {
    scale: [{ 1: "Strongly Disagree" }, { 5: "Strongly Agree" }],
    questions: [
      {
        id: 1,
        title: "I think that I would like to use this system frequently",
      },
      {
        id: 2,
        title: "I found the system unnecessarily complex",
      },
      {
        id: 3,
        title: "I thought the system was easy to use",
      },
      {
        id: 4,
        title:
          "I think that I would need the support of a technical person to be able to use this system",
      },
      {
        id: 5,
        title:
          "I found the various functions in this system were well integrated",
      },
      {
        id: 6,
        title: "I thought there was too much inconsistency in this system",
      },
      {
        id: 7,
        title:
          "I would imagine that most people would learn to use this system very quickly",
      },
      {
        id: 8,
        title: "I found the system very cumbersome to use",
      },
      {
        id: 9,
        title: "I felt very confident using the system",
      },
      {
        id: 10,
        title:
          "I need to learn a lot of things before I could get going with this system",
      },
    ],
  };
</script>

<form action="" class="text-center mx-8 mt-8">
  <div class="text-left mx-8">
    <fieldset>
      <legend class="font-bold text-xl">Your Details</legend>
      <div class="py-4 flex flex-col m-0">
        <label for="user_name">
          <span class="visuallyhidden">Your </span>Name:
        </label><br />
        <input
          type="text"
          name="user_name"
          id="user_name"
          class="border py-2"
        />
      </div>
      <div class="py-4 flex flex-col">
        <label for="user_email">Email:</label><br />
        <input
          type="text"
          name="user_email"
          id="user_email"
          class="border py-2"
        />
      </div>
    </fieldset>
  </div>

  <fieldset class="">
    {#each survey.questions as q}
      <div class="my-40">
        <legend class="text-xl">{q.title}</legend>
        <div class="flex justify-between my-8 mx-8">
          {#each numbers as n}
            <div class="flex flex-col flex-col-reverse">
              <input type="radio" name="number" id={`${n}`} value={n} />
              <label for="csv" class="my-4 text-xl">{n}</label>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </fieldset>
  <button type="submit" class="bg-black text-white px-4 py-2">Submit</button>
</form>
