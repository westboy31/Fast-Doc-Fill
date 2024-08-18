# Fast Doc Fill

Fast Doc Fill is an open-source Vue.js application designed to quickly replace certain fields in a Markdown text using placeholders. These placeholders are automatically detected using the `$$` sign and can be easily filled with a panel.

## Features

- **Easy Placeholder Detection:** Placeholders in the text are identified using the `$$` sign.
- **User-Friendly Panel:** A panel is provided to quickly fill in the detected placeholders.
- **Markdown and PDF Export:** After filling in the placeholders, the text can be saved by either copying the Markdown content or downloading it as a PDF.

## How to Use

1. **Add Placeholders:** In your Markdown text, mark the fields you want to replace with placeholders by enclosing them in `$$`. For example:
    ```markdown
    ## Project Title

    This project is called $$ProjectName$$.

    ## Description

    $$ProjectDescription$$
    ```

2. **Load Markdown Text:** Open the Fast Doc Fill web page and paste your Markdown text into the provided text area.

3. **Fill Placeholders:** The editor will automatically detect the placeholders and display a panel where you can enter the desired values for each placeholder.

4. **Save Your Work:** Once all placeholders are filled, you can save your work by:
    - Copying the completed Markdown content.
    - Downloading the content as a PDF file.

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository:**
    ```sh
    git clone https://github.com/westboy31/Fast-Doc-Fill.git
    cd fast-doc-fill
    ```

2. **Run the Application:**
    ```sh
    npm install
    npm run dev
    ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.



We hope you find Fast Doc Fill helpful and look forward to your feedback and contributions!

---


