export function formatRelativeDate(date: string | Date): string {
  const diffMs = new Date().getTime() - new Date(date).getTime();
  const diffSec = Math.round(diffMs / 1000);
  const diffMin = Math.round(diffSec / 60);
  const diffHour = Math.round(diffMin / 60);
  const diffDay = Math.round(diffHour / 24);
  const diffWeek = Math.round(diffDay / 7);
  const diffMonth = Math.round(diffDay / 30);
  const diffYear = Math.round(diffDay / 365);

  if (diffSec < 60) return "agora mesmo";
  if (diffMin < 60) return diffMin === 1 ? "1 minuto atrás" : `${diffMin} minutos atrás`;
  if (diffHour < 24) return diffHour === 1 ? "1 hora atrás" : `${diffHour} horas atrás`;
  if (diffDay < 7) return diffDay === 1 ? "1 dia atrás" : `${diffDay} dias atrás`;
  if (diffWeek < 5) return diffWeek === 1 ? "1 semana atrás" : `${diffWeek} semanas atrás`;
  if (diffMonth < 12) return diffMonth === 1 ? "1 mês atrás" : `${diffMonth} meses atrás`;
  return diffYear === 1 ? "1 ano atrás" : `${diffYear} anos atrás`;
}

export function getBackgroundImage(srcSet = "") {
  const imageSet = srcSet
    .split(", ")
    .map((str) => {
      const [url, dpi] = str.split(" ");
      return `url("${url}") ${dpi}`;
    })
    .join(", ");
  return `image-set(${imageSet})`;
}
