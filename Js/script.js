$(document).ready(function() {
    // Subjects for each stream
    const subjects = {
        science: ["English", "Mathematics", "Physics", "Chemistry", "Biology", "Further Maths", "Agricultural Science", "Geography", "Economics"],
        art: ["English", "Mathematics", "Literature", "Government", "History", "CRK/IRK", "Economics", "Geography", "Yoruba/Igbo/Hausa"],
        commercial: ["English", "Mathematics", "Commerce", "Accounting", "Economics", "Government", "Geography", "CRK/IRK", "Business Studies"]
    };

    // Grades options (A1 to F9)
    const grades = ["A1", "B2", "B3", "C4", "C5", "C6", "D7", "E8", "F9"];

    // Function to load subjects based on selected stream
    function loadSubjects(stream) {
        $("#subjectsBody").empty(); // Clear previous subjects
        subjects[stream].forEach(subject => {
            let row = `<tr>
                <td>${subject}</td>
                <td>
                    <select class="grade-select">
                        ${grades.map(grade => `<option value="${grade}">${grade}</option>`).join('')}
                    </select>
                </td>
            </tr>`;
            $("#subjectsBody").append(row);
        });
    }

    // When stream changes, update subjects
    $('input[name="stream"]').change(function() {
        loadSubjects($(this).val());
    });

    // Load Science subjects by default
    loadSubjects("science");

    // Generate Result Button Click
    $("#generateBtn").click(function() {
        $("#resultBody").empty(); // Clear previous result
        let passed = 0;

        // Loop through each subject and grade
        $("#subjectsBody tr").each(function() {
            let subject = $(this).find("td:first").text();
            let grade = $(this).find(".grade-select").val();
            
            // Check if grade is a credit (C6 or better)
            if (["A1", "B2", "B3", "C4", "C5", "C6"].includes(grade)) {
                passed++;
            }

            // Add to result table
            $("#resultBody").append(`<tr><td>${subject}</td><td>${grade}</td></tr>`);
        });

        // Show pass/fail status
        let resultText = (passed >= 5) ? "✅ PASSED (5+ Credits)" : "❌ FAILED (Less than 5 Credits)";
        $("#resultBody").append(`<tr><td><strong>Result:</strong></td><td><strong>${resultText}</strong></td></tr>`);

        // Show the result section
        $("#result").show();
    });
});