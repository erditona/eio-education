$(document).ready(function () {
  $("#quiz-form").submit(function (event) {
    event.preventDefault();

    const answerQ1 = $("input[name=q1]:checked").val();
    const answerQ2 = $("input[name=q2]:checked").val();
    const answerQ3 = $("input[name=q3]:checked").val();

    const correctAnswers = {
      q1: "a",
      q2: "b",
      q3: "c",
    };

    if (answerQ1 === correctAnswers.q1 && answerQ2 === correctAnswers.q2 && answerQ3 === correctAnswers.q3) {
      Swal.fire({
        title: "Jawaban Benar!",
        text: "Selamat, Anda telah menjawab semua pertanyaan dengan benar.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        // Redirect to index.html
        window.location.href = "index.html";
      });
    } else {
      Swal.fire("Jawaban Salah!", "Anda harus menjawab semua pertanyaan dengan benar untuk mendapatkan poin.", "error");
    }
  });
});
