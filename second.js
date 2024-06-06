// Data pertanyaan dari file .json (contoh)
const quizData = [
    {
        question: "Apa yang ibu ketahui tentang stunting?",
        options: [
            "A. Kondisi gagal tumbuh pada anak sehingga anak lebih terlalu pendek pada seusiannya",
            "B. Kondisi penyakit pada anak sehingga menyebabkan anak gagal tumbuh",
            "C. Kondisi kelainan sehingga menyebabkan penyakit yang membuat anak pendek untuk usianya"
        ],
        answer: "A. Kondisi gagal tumbuh pada anak sehingga anak lebih terlalu pendek pada seusiannya"
    },
    {
        question: "Bagaimana cara ibu untuk mengetahui anak tergolong stunting ?",
        options: [
            "A. Mengukur tinggi badan anak",
            "B. Mengukur panjang kaki anak",
            "C. Mengukur berat badan anak"
        ],
        answer: "A. Mengukur tinggi badan anak"
    },
    {
        question: " Berikut yang tidak termasuk penyebab stunting pada anak adalah ?",
        options: [
            "A. Kurangnya pengetahuan ibu tentang pola asuh anak",
            "B. Faktor kurangnya gizi pada anak",
            "C. Faktor keturunan"
        ],
        answer: "C. Faktor keturunan"
    },
    {
        question: "Apa ciri-ciri stunting pada anak ?",
        options: [
            "A. Nafsu makan anak menurun",
            "B. Tinggi badan anak lebih pendek dibandingkan anak lain seusianya",
            "C. Berat badan anak lebih kurus dibanding anak lain seusianya"
        ],
        answer: "B. Tinggi badan anak lebih pendek dibandingkan anak lain seusianya"
    },
    {
        question: "Pada usia berapa anak-anak paling rentan mengalami stunting? Apa ciri-ciri stunting pada anak ?",
        options: [
            "A. 0-2 tahun ",
            "B. 3-5 tahun ",
            "C. 6-12 tahun "
        ],
        answer: "A. 0-2 tahun "
    },
    {
        question: "Bagaimana dampak yang akan terjadi pada anak yang mengalami stunting ?",
        options: [
            "A. Kemampuan belajar anak rendah",
            "B. Anak menjadi pemalu",
            "C. Anak menjadi mudah lelah"
        ],
        answer: "A. Kemampuan belajar anak rendah"
    },
    {
        question: "Apa dampak jangka panjang akibat stunting pada anak saat dewasa ?",
        options: [
            "A. Beresiiko terkena penyakit TBC",
            "B. Beresiko terkena penyakit malaria",
            "C. Beresiko terkena penyakit diabetes"
        ],
        answer: "C. Beresiko terkena penyakit diabetes"
    },
    {
        question: "sampai usia berapakah hanya ASI Eksklusif saja yang diberikan pada bayi?",
        options: [
            "A. 0-4 bulan",
            "B. 0-6 bulan",
            "C. 0-8 bulan"
        ],
        answer: "B. 0-6 bulan"
    },
    {
        question: "Apa saja ciri-ciri stunting pada anak yang beranjak remaja…",
        options: [
            "A. Anak lebih aktif",
            "B. Pubertas terhambat",
            "C. Anak memiliki badan yang gemuk"
        ],
        answer: "B. Pubertas terhambat"
    },
    {
        question: "Pencegahan stunting dilakukan sejak masa kehamilan dengan cara …",
        options: [
            "A. Makan makan yang mahal",
            "B. Rajin mengkonsumsi sayur saja",
            "C. Memenuhi gizi selama masa kehamilan"
        ],
        answer: "C. Memenuhi gizi selama masa kehamilan"
    },
    {
        question: "Pencegahan anak stunting dapat dilakukan dengan cara?",
        options: [
            "A. Berkonsultasi dengan petugas kesehatan",
            "B. Mengkonsumsi suplemen peninggi badan",
            "C. Berolahraga secara teratur"
        ],
        answer: "A. Berkonsultasi dengan petugas kesehatan"
    },
    {
        question: "Nutrisi apa yang paling penting untuk mencegah stunting pada anak? ",
        options: [
            "A. Protein dan vitamin A ",
            "B. Lemak dan karbohidrat ",
            "C. Gula dan garam "
        ],
        answer: "A. Protein dan vitamin A "
    },
    {
        question: "Bagaimana cara paling efektif untuk mencegah stunting pada anak? ",
        options: [
            "A. Mengurangi waktu bermain di luar ruangan ",
            "B. Memberikan vaksin secara rutin ",
            "C. Memberikan makanan bergizi seimbang dan ASI eksklusif selama 6 bulan pertama"
        ],
        answer: "C. Memberikan makanan bergizi seimbang dan ASI eksklusif selama 6 bulan pertama"
    },
    {
        question: "Apa indikasi fisik yang paling umum terlihat pada anak yang mengalami stunting? ",
        options: [
            "A. Kulit pucat ",
            "B. Berat badan berlebih ",
            "C. Tinggi badan lebih pendek dari standar usianya"
        ],
        answer: "C. Tinggi badan lebih pendek dari standar usianya"
    },
    {
        question: "Program pemerintah apa yang bertujuan untuk menurunkan angka stunting di Indonesia? ",
        options: [
            "A. Program Keluarga Harapan (PKH)",
            "B. Program Indonesia Pintar ",
            "C. Program Seribu Hari Pertama Kehidupan (1000 HPK)"
        ],
        answer: "C. Program Seribu Hari Pertama Kehidupan (1000 HPK)"
    },
    // Tambahkan pertanyaan lainnya di sini
];

const quizContainer = document.getElementById("quiz-container");

// Fungsi untuk mengisi pertanyaan ke dalam kontainer
function displayQuiz() {
    let quizHTML = "";
    quizData.forEach((question, index) => {
        quizHTML += `
            <div class="question">
                <p>${index + 1}. ${question.question}</p>
                <ul>
                    ${question.options.map(option => `
                        <li>
                            <input type="radio" name="question${index + 1}" value="${option}">
                            ${option}
                        </li>
                    `).join("")}
                </ul>
            </div>
        `;
    });
    quizContainer.innerHTML = quizHTML;
}

// Panggil fungsi untuk menampilkan pertanyaan
displayQuiz();

var form = document.getElementById("sheetdb-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let benar = 0;
    let salah = 0;

    const formData = new FormData(form);

    quizData.forEach((question, index) => {
        const questionName = `question${index + 1}`;
        const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);
        if (selectedOption) {
            formData.append(`data[${questionName}]`, selectedOption.value);
            if (selectedOption.value === question.answer) {
                benar++;
            } else {
                salah++;
            }
        } else {
            salah++;
        }
    });

    formData.append('data[benar]', benar);
    formData.append('data[salah]', salah);

    fetch(form.action, {
        method: "POST",
        body: formData
    })
    .then(function (response) {
        if (response.ok) {
            alert("Terima kasih atas partisipasi Anda! Jawaban Anda sangat membantu penelitian kami.");
            setTimeout(function () {
                location.replace("index.html");
            }, 3000);
        } else {
            console.error("Error:", response.statusText);
        }
    })
    .catch(function (error) {
        console.error("Error:", error);
    });
});