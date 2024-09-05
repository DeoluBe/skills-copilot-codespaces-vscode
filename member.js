function skillsMember() {
    // Get the list of skills
    var skills = document.querySelectorAll('.skills-list li');
    // If there are no skills, return
    if (!skills.length) {
        return;
    }

    // Get the skill category
    var category = document.querySelector('.skills-category');
    var categoryValue = category ? category.textContent.trim() : null;

    // Get the skill level
    var level = document.querySelector('.skills-level');
    var levelValue = level ? level.textContent.trim() : null;

    // Get the skill years
    var years = document.querySelector('.skills-years');
    var yearsValue = years ? years.textContent.trim() : null;

    // Get the skills data
    var data = Array.prototype.map.call(skills, function(skill) {
        return {
            name: skill.textContent.trim(),
            category: categoryValue,
            level: levelValue,
            years: yearsValue
        };
    });

    // Send the data to the analytics
    analytics.track('Skills Member', {
        skills: data
    });
    // Send the data to the analytics
    analytics.track('Skills Member', {
        skills: data
    });
}