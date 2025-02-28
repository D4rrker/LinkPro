export const downloadQR = (id: string, fileName = "qrcode.png") => {
    const canvas = document.getElementById(id) as HTMLCanvasElement;
    if (!canvas) return;
  
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};
  