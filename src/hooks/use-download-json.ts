const useDownloadJSON = (filename: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const downloadJson = (data: any) => {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();

    URL.revokeObjectURL(url);
  }

  return { downloadJson };
}

export default useDownloadJSON;
