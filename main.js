// Data pertanyaan dari file .json (contoh)
const quizData = [
    {
        question: "Apa yang ibu ketahui tentang stunting?",
        options: [
            "A. Kondisi dimana anak mengalami gangguan pertumbuhan, sehingga tinggi badan anak tidak sesuai dengan usianya",
            "B. Kondisi penyakit pada anak sehingga menyebabkan anak gagal tumbuh",
            "C. Kondisi kelainan sehingga menyebabkan penyakit yang membuat anak pendek untuk usianya"
        ],
        answer: "A. Kondisi dimana anak mengalami gangguan pertumbuhan, sehingga tinggi badan anak tidak sesuai dengan usianya"
    },
    {
        question: "Kondisi dimana anak mengalami gangguan pertumbuhan, sehingga tinggi badan anak tidak sesuai dengan usianya, disebut juga dengan istilah ?",
        options: [
            "A. Stunting",
            "B. Wasting",
            "C. Obesitas"
        ],
        answer: "A. Stunting"
    },
    {
        question: "Dibawah ini salah satu penyebab berat badan lahir rendah pada anak stunting adalah?",
        options: [
            "A. Gizi ibu saat hamil",
            "B. Usia ibu dibawah 35 tahun",
            "C. Usia ibu lebih dari 20 tahun "
        ],
        answer: "A. Gizi ibu saat hamil"
    },
    {
        question: "Berikut yang tidak termasuk penyebab stunting pada anak adalah ?",
        options: [
            "A. Faktor kurangnya pengetahuan ibu",
            "B. Faktor kurangnya gizi pada anak",
            "C. Faktor keturunan"
        ],
        answer: "C. Faktor keturunan"
    },
    {
        question: "Bagaimana cara ibu untuk mengetahui anak tergolong stunting ?",
        options: [
            "A. Mengukur tinggi badan anak",
            "B. Mengukur panjang kaki anak ",
            "C. Mengukur berat badan anak"
        ],
        answer: "A. Mengukur tinggi badan anak"
    },
    {
        question: "Ciri-ciri stunting pada anak ?",
        options: [
            "A. Anak yang memiliki tubuh lebih pendek",
            "B. Anak yang memilii tubuh lebih kurus",
            "C. Anak yang memiliki tubuh gemuk "
        ],
        answer: "A. Anak yang memiliki tubuh lebih pendek"
    },
    {
        question: "Dibawah ini merupakan salah satu ciri stunting dengan menurunnya kemampuan anak adalah?",
        options: [
            "A. Kemampuan belajar anak meningat",
            "B. Kemampuan focus memori belajar anak tidak baik",
            "C. Kemampuan anak meningkat "
        ],
        answer: "B. Kemampuan focus memori belajar anak tidak baik"
    },
    {
        question: "Pada usia berapa anak-anak paling rentan mengalami stunting? ",
        options: [
            "A. 0-2 tahun ",
            "B. 3-5 tahun ",
            "C. 6-12 tahun "
        ],
        answer: "A. 0-2 tahun "
    },
    {
        question: "Apa dampak jangka pendek pada anak yang mengalami stunting?",
        options: [
            "A. Meningkatan potensi sakit dan kematian pada anak",
            "B. Meningkatkan potensi belajar pada anak",
            "C. Meningkatkan potensi anak menjadi lebih aktif"
        ],
        answer: "A. Meningkatan potensi sakit dan kematian pada anak"
    },
    {
        question: "Apa dampak jangka panjang pada anak yang mengalami stunting?",
        options: [
            "A. Beresiiko terkena penyakit TBC",
            "B. Beresiko terkena penyakit malaria",
            "C. Beresiko terkena penyakit diabetes"
        ],
        answer: "C. Beresiko terkena penyakit diabetes"
    },
    {
        question: "Apa saja ciri-ciri stunting pada anak yang beranjak remaja…",
        options: [
            "A. Pinggul membesar ",
            "B. Pubertas terhambat",
            "C. Pertumbuhan payudara "
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
            "A. Berkonsultasi dengan petugas kesehatan ",
            "B. Mengkonsumsi suplemen peninggi badan",
            "C. Berolahraga secara teratur"
        ],
        answer: "A. Berkonsultasi dengan petugas kesehatan"
    },
    {
        question: "Bagaimana cara paling efektif untuk mencegah stunting pada anak? ",
        options: [
            "A. Mengurangi waktu bermain di luar ruangan",
            "B. Memberikan vaksin secara rutin",
            "C. Memberikan ibu makanan bergizi seimbang"
        ],
        answer: "C. Memberikan ibu makanan bergizi seimbang "
    },
    {
        question: "Apakah ciri stunting pada anak yang dapat mempengaruhi pertumbuhan : ",
        options: [
            "A. Pertumbuhan gigi melambat",
            "B. Bermain dengan teman sebaya",
            "C. Berbicara dalam dua bahasa"
        ],
        answer: "A. Pertumbuhan gigi melambat"
    },
    {
        question: "Faktor lingkungan yang dapat menyebabkan stunting termasuk: ",
        options: [
            "A. Kurangnya eksposur terhadap sinar matahari",
            "B. Lingkungan yang tidak bersih dan sanitasi yang buruk",
            "C. Paparan terhadap teknologi modern"
        ],
        answer: "A. Kurangnya eksposur terhadap sinar matahari"
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
            location.replace("materi.html"); // Ganti dengan halaman tujuan Anda
        } else {
            console.error("Error:", response.statusText);
        }
    })
    .catch(function (error) {
        console.error("Error:", error);
    });
});