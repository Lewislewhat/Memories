document.addEventListener("DOMContentLoaded", () => {
    // Love Verse and Bible Verse
    const loveVerses = [
      "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. - 1 Corinthians 13:4",
      "Above all, love each other deeply, because love covers over a multitude of sins. - 1 Peter 4:8",
    ];
  
    const bibleProverbs = [
      "Trust in the Lord with all your heart and lean not on your own understanding. - Proverbs 3:5",
      "The fear of the Lord is the beginning of wisdom. - Proverbs 9:10",
    ];
  
    const randomLoveVerse = loveVerses[Math.floor(Math.random() * loveVerses.length)];
    const randomBibleProverb = bibleProverbs[Math.floor(Math.random() * bibleProverbs.length)];
  
    document.getElementById("love-verse").textContent = randomLoveVerse;
    document.getElementById("daily-verse").textContent = randomBibleProverb;
  
    // Event Listeners
    document.getElementById("add-memory").addEventListener("click", () => {
      const memory = prompt("Enter a new memory:");
      if (memory) {
        const memoryList = document.getElementById("memory-items");
        const listItem = document.createElement("li");
        listItem.innerHTML = $; {memory} <button onclick="deleteMemory(this)">Delete</button>;
        memoryList.appendChild(listItem);
        document.getElementById("memory-list").classList.remove("hidden");
      }
    });
  
    document.getElementById("view-memories").addEventListener("click", () => {
      document.getElementById("memory-list").classList.toggle("hidden");
    });
  });
  
  // Delete Memory
  function deleteMemory(button) {
    button.parentElement.remove();
  }