const facultySelect = document.getElementById("faculty-select");
const majorSelect = document.getElementById("major-select");
const courseGrid = document.getElementById("course-grid");
const progressLabel = document.getElementById("progress-label");
const progressFill = document.getElementById("progress-fill");

const TOTAL_COURSES = 36; // Total required courses for graduation

/**
 * Mock data for majors and specific courses.
 * The structure includes faculties, their majors, and required courses.
 */
const data = {
    Math: {
        majors: {
            "Honours Mathematics (Business)": [
                // Complete all of the following
                { code: "MATH135", name: "Algebra for Honours Mathematics (0.50)" },
                { code: "MATH137", name: "Calculus 1 for Honours Mathematics (0.50)" },
                { code: "STAT230", name: "Probability (0.50)" },
                { code: "MATH138", name: "Calculus 2 for Honours Mathematics (0.50)" },
                { code: "MATH239", name: "Introduction to Combinatorics (0.50)" },
                // Complete 1 of the following: CS Courses
                { code: "CS115", name: "Introduction to Computer Science 1 (0.50)" },
                // Complete 1 of the following: CS Courses
                { code: "CS116", name: "Introduction to Computer Science 2 (0.50)" },
                // Complete 1 of the following: MATH106, MATH136, MATH146
                { code: "MATH136", name: "Linear Algebra 1 for Honours Mathematics (0.50)" },
                // Complete 1 of the following: MATH207, MATH229, MATH237, MATH239, MATH247, MATH249
                { code: "MATH237", name: "Calculus 3 for Honours Mathematics (0.50)" },
                // Complete 1 of the following: MATH225, MATH235, MATH245
                { code: "MATH235", name: "Linear Algebra 2 for Honours Mathematics (0.50)" },
                // Complete 1 of the following: STAT221, STAT231, STAT241
                { code: "STAT231", name: "Statistics (0.50)" },
                // Complete 10 additional math courses at the 300- or 400-level
                { code: "AFM101", name: "Introduction to Financial Accounting (0.50)" },
                { code: "AFM102", name: "Introduction to Managerial Accounting (0.50)" },
                { code: "BUS121W", name: "Critical Thinking and Communication Skills (WLU) (0.50)" },
                { code: "CS330", name: "Management Information Systems (0.50)" },
                { code: "ECON101", name: "Introduction to Microeconomics (0.50)" },
                { code: "ECON102", name: "Introduction to Macroeconomics (0.50)" },
                // Complete 1 of the following: ACTSC221, ACTSC231, ACTSC291, AFM272
                { code: "ACTSC231", name: "Introductory Financial Mathematics (0.50)" },
                // Complete 1 of the following: AFM131, ARBUS101, BUS111W
                { code: "AFM131 or ARBUS101 or BUS111W", name: "Introduction to Business in North America (0.50)" },
                // Complete 1 of the following: ARBUS302, BUS252W, MGMT244
                { code: "ARBUS302 or BUS252W or MGMT244", name: "Principles of Marketing (0.50)" },
                // Complete 1 of the following: CO227, CO250, CO255
                { code: "CO227 or CO250", name: "Introduction to Optimization (Non-Specialist Level) (0.50)" },
                // Complete 1 of the following: CO327, CO370
                { code: "CO327 or CO370", name: "Deterministic OR Models (Non-Specialist Level) (0.50)" },
                // Complete 2 of the following: CS200, CS338, CS430, STAT340
                { code: "CS200", name: "Concepts for Advanced Computer Usage (0.50)" },
                { code: "CS338", name: "Computer Applications in Business: Databases (0.50)" },
                { code: "CS430", name: "Applications Software Engineering (0.50)" },
                { code: "STAT340", name: "Stochastic Simulation Methods (0.50)" },
                // Complete 1 of the following: CO431, CO432
                { code: "CO431", name: "Network Flows (0.50)" },
                // Complete 1 of the following: STAT321, STAT322
                { code: "STAT321 or STAT322", name: "Regression and Forecasting (0.50)" },
                // Complete 3 additional courses of the following:
                { code: "LS271 or PACS202", name: "Conflict Resolution (0.50)" },
                { code: "LS319 or PACS323", name: "Negotiation: Theories and Strategies (0.50)" },
                { code: "HRM301", name: "Strategic HR Management (0.50)" },
                { code: "STV210", name: "The Computing Society (0.50)" },
                { code: "HRM200", name: "Basic HR Management (0.50)" },
                { code: "STV202", name: "Design and Society (0.50)" },
                //Complete 10 upper year math courses:
                { code: "STAT330", name: "Mathematical Statistics (0.50)" },
                { code: "STAT331", name: "Applied Linear Models (0.50)" },
                { code: "STAT333", name: "Stochastic Processes 1 (0.50)" },
                { code: "CO480", name: "History of Mathematics (0.50)" },
                { code: "CO380", name: "Mathematical Discovery and Invention (0.50)" },
                { code: "CS371", name: "Intro to Computational Mathematics (0.50)" },
                { code: "CS234", name: "Data Types and Structures (0.50)" },
                { code: "CO487", name: "Applied Cryptography (0.50)" },
                { code: "CS230", name: "Intro to Computers and Computer Systems (0.50)" },
                { code: "PMATH340", name: "Elementary Number Theory (0.50)" },
                
                 // Complete 2 communication classes:
                 { code: "COMMST227", name: "Leadership (0.50)" },
                 { code: "COMMST100", name: "Interpersonal Communication (0.50)" },
               
                // Complete 1 of the following: CO475, CO476
                { code: "CO475", name: "Computational Methods for Optimization (0.50)" },
                //
            ],
            "Applied Mathematics": [
                { code: "AMATH250", name: "Numerical Methods" },
                { code: "STAT231", name: "Statistics" },
                { code: "MATH136", name: "Calculus III" }
            ],
            "Pure Mathematics": [
                { code: "AMATH250", name: "Numerical Methods" },
                { code: "STAT231", name: "Statistics" },
                { code: "MATH136", name: "Calculus III" }
            ],
            "Statistics": [
                { code: "AMATH250", name: "Numerical Methods" },
                { code: "STAT231", name: "Statistics" },
                { code: "MATH136", name: "Calculus III" }
            ],
            "Computer Science": [
                { code: "AMATH250", name: "Numerical Methods" },
                { code: "STAT231", name: "Statistics" },
                { code: "MATH136", name: "Calculus III" }
            ],
            "Data Science": [
                { code: "AMATH250", name: "Numerical Methods" },
                { code: "STAT231", name: "Statistics" },
                { code: "MATH136", name: "Calculus III" }
            ],
            "Math Teaching": [
                { code: "AMATH250", name: "Numerical Methods" },
                { code: "STAT231", name: "Statistics" },
                { code: "MATH136", name: "Calculus III" }
            ],
            "Combinatorics and Optimization": [
                { code: "AMATH250", name: "Numerical Methods" },
                { code: "STAT231", name: "Statistics" },
                { code: "MATH136", name: "Calculus III" }
            ],
            "Computational Mathematics": [
                { code: "AMATH250", name: "Numerical Methods" },
                { code: "STAT231", name: "Statistics" },
                { code: "MATH136", name: "Calculus III" }
            ],
            "Acturial Science": [
                { code: "AMATH250", name: "Numerical Methods" },
                { code: "STAT231", name: "Statistics" },
                { code: "MATH136", name: "Calculus III" }
            ]
        }
    },
    Engineering: {
        majors: {
            "Electrical Engineering": [
                { code: "ENGR201", name: "Circuit Theory" },
                { code: "ENGR202", name: "Signals and Systems" },
                { code: "ENGR203", name: "Electromagnetic Fields" }
            ],
            "Mechanical Engineering": [
                { code: "MECH301", name: "Thermodynamics" },
                { code: "MECH302", name: "Fluid Mechanics" },
                { code: "MECH303", name: "Dynamics" }
            ]
        }
    },
    Science: {
        majors: {
            "Biology": [
                { code: "BIO101", name: "Cell Biology" },
                { code: "BIO102", name: "Genetics" },
                { code: "BIO103", name: "Ecology" }
            ],
            "Chemistry": [
                { code: "CHEM101", name: "General Chemistry" },
                { code: "CHEM102", name: "Organic Chemistry" },
                { code: "CHEM103", name: "Inorganic Chemistry" }
            ]
        }
    },
    Health: {
        majors: {
            "Nursing": [
                { code: "NURS101", name: "Fundamentals of Nursing" },
                { code: "NURS102", name: "Pharmacology" },
                { code: "NURS103", name: "Health Assessment" }
            ],
            "Public Health": [
                { code: "PUBH201", name: "Epidemiology" },
                { code: "PUBH202", name: "Health Policy" },
                { code: "PUBH203", name: "Global Health" }
            ]
        }
    }
};
// Populate majors based on selected faculty
facultySelect.addEventListener("change", function() {
    const selectedFaculty = this.value;
    majorSelect.innerHTML = '<option value="">--Select Major--</option>'; // Reset majors
    if (selectedFaculty) {
        const majors = Object.keys(data[selectedFaculty].majors);
        majors.forEach(major => {
            const option = document.createElement("option");
            option.value = major;
            option.textContent = major;
            majorSelect.appendChild(option);
        });
        majorSelect.disabled = false; // Enable major selection
    } else {
        majorSelect.disabled = true; // Disable if no faculty selected
    }
});
// Display required courses organized by subject when a major is selected
majorSelect.addEventListener("change", function() {
    const selectedMajor = this.value;
    courseGrid.innerHTML = ''; // Clear previous courses
    progressLabel.textContent = `Progress: 0/${TOTAL_COURSES} (0%)`; // Reset progress
    progressFill.style.width = `0%`; // Reset progress fill
    if (selectedMajor) {
        const selectedFaculty = facultySelect.value;
        // Create a column for each subject
        const subjectCourses = data[selectedFaculty].majors[selectedMajor];
        const subjectGroups = {};
        let completedCourses = 0; // Count completed courses
        // Group courses by subject
        subjectCourses.forEach(course => {
            const subject = course.code.match(/[A-Z]+/)[0]; // Extract the full subject code (letters only)
            if (!subjectGroups[subject]) subjectGroups[subject] = [];
            subjectGroups[subject].push(course);
        });
        // Create columns for each subject group
        Object.keys(subjectGroups).forEach(subject => {
            const subjectColumn = document.createElement("div");
            subjectColumn.className = "subject-column";
            const subjectHeader = document.createElement("h3");
            subjectHeader.textContent = subject; // Display subject name
            subjectColumn.appendChild(subjectHeader);
            subjectGroups[subject].forEach(course => {
                const div = document.createElement("div");
                div.className = "course-item required"; // Set the required class
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.id = `${course.code}-${course.name}`;
                checkbox.className = "course-checkbox";
                const label = document.createElement("label");
                label.htmlFor = checkbox.id;
                label.textContent = `${course.code} - ${course.name}`;
                // Event listener to handle checkbox changes
                checkbox.addEventListener("change", function() {
                    if (this.checked) {
                        label.classList.add("completed"); // Add completed class
                        div.classList.remove("required"); // Remove required class
                        completedCourses++; // Increment completed courses
                    } else {
                        label.classList.remove("completed"); // Remove completed class
                        div.classList.add("required"); // Add required class back
                        completedCourses--; // Decrement completed courses
                    }
                    updateProgress(completedCourses); // Update progress
                });
                div.appendChild(checkbox);
                div.appendChild(label);
                subjectColumn.appendChild(div);
            });
            courseGrid.appendChild(subjectColumn); // Add the column to the grid
        });
        updateProgress(completedCourses); // Initial update on loading courses
    }
});
// Function to update the progress tracker
function updateProgress(completed) {
    const percent = (completed / TOTAL_COURSES) * 100; // Calculate percent
    progressLabel.textContent = `Progress: ${completed}/${TOTAL_COURSES} (${Math.round(percent)}%)`; // Update text
    progressFill.style.width = `${percent}%`; // Update progress bar width
    // Check for graduation
    if (completed === TOTAL_COURSES) {
        alert("CONGRATULATIONS YOU CAN GRADUATE!");
    }
}
// Select body element for background change
const body = document.body;
// Populate majors based on selected faculty
facultySelect.addEventListener("change", function() {
    const selectedFaculty = this.value;
    majorSelect.innerHTML = '<option value="">--Select Major--</option>'; // Reset majors
    if (selectedFaculty) {
        // Add faculty-specific background class
        body.className = `${selectedFaculty.toLowerCase()}-bg`; // Apply background class
        const majors = Object.keys(data[selectedFaculty].majors);
        majors.forEach(major => {
            const option = document.createElement("option");
            option.value = major;
            option.textContent = major;
            majorSelect.appendChild(option);
        });
        majorSelect.disabled = false; // Enable major selection
    } else {
        majorSelect.disabled = true; // Disable if no faculty selected
        body.className = ""; // Remove background class
    }
});
