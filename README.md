# Single Page Application Using jQuery

This repository contains a simple single-page application (SPA) built using jQuery. The application demonstrates navigation between different pages using jQuery and provides a basic structure for SPAs.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Demo

You can see a live demo of the application [here](https://akshay-k-a-dev.github.io/singlepage-app-using-jquery/).

## Features

- Navigation between different sections without page reloads.
- Simple and clean UI.
- Easy to extend and customize.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/akshay-k-a-dev/singlepage-app-using-jquery.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd singlepage-app-using-jquery
    ```

3. **Open `index.html` in your preferred browser.**

## Usage

The application consists of different sections (e.g., Home, About, Contact) that can be navigated to using the navigation bar. Each section is loaded dynamically using jQuery.

### File Structure

```plaintext
singlepage-app-using-jquery/
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── index.html
└── README.md
```

### Key Files

- `index.html`: The main HTML file containing the structure of the application.
- `css/styles.css`: The CSS file for styling the application.
- `js/main.js`: The JavaScript file containing jQuery code for dynamic navigation.

### Adding New Sections

To add a new section, follow these steps:

1. **Add a new navigation item in `index.html`:**

    ```html
    <li><a href="#new-section" class="nav-link">New Section</a></li>
    ```

2. **Create a new section in `index.html`:**

    ```html
    <div id="new-section" class="section">
        <h2>New Section</h2>
        <p>Content for the new section.</p>
    </div>
    ```

3. **Add jQuery code to handle the new section in `main.js`:**

    ```javascript
    $('a.nav-link').on('click', function(e) {
        e.preventDefault();
        const target = $(this).attr('href');
        $('.section').hide();
        $(target).show();
    });
    ```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

1. **Fork the repository.**
2. **Create a new branch:**

    ```bash
    git checkout -b feature/your-feature-name
    ```

3. **Commit your changes:**

    ```bash
    git commit -m 'Add some feature'
    ```

4. **Push to the branch:**

    ```bash
    git push origin feature/your-feature-name
    ```

5. **Create a pull request.**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
