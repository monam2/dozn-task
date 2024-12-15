export const openPopup = (title: string, data: ScrpDescriptionData) => {
  const popup = window.open("", "_blank", "width=800,height=600,scrollbars=yes,resizable=yes");

  if (!popup) {
    alert("오류가 발생했습니다.");
    return;
  }

  const html = `
  <html>
      <head>
        <title>${title}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            padding: 20px;
          }
          table {
            border-collapse: collapse;
            width: 100%;
            margin-top: 20px;
          }
          th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
          }
          th {
            background-color: #f2f2f2;
          }
        </style>
      </head>
      <body>
        <h1>${title}</h1>
        <pre>${JSON.stringify(data, null, 2)}</pre>
      </body>
    </html>
  `;

  popup.document.write(html);
  popup.document.close();
};
