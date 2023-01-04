type Theme = 'dark' | 'light';

const isUserPreferenceDark = () => localStorage && localStorage.theme === 'dark';

const isBrowserPreferenceDark = () =>
	localStorage &&
	!('theme' in localStorage) &&
	window.matchMedia('(prefers-color-scheme: dark)').matches;

const isDarkTheme = () => isUserPreferenceDark() || isBrowserPreferenceDark();

const getTheme: () => Theme = () => (isDarkTheme() ? 'dark' : 'light');
const getOppositeTheme: () => Theme = () => (isDarkTheme() ? 'light' : 'dark');

const setTheme = (theme: Theme) => {
	if (localStorage) {
		localStorage.setItem('theme', theme);
	}

	if (theme === 'dark') {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}
};

const useCurrentTheme = () => setTheme(getTheme());

const toggleTheme = () => setTheme(getOppositeTheme());

export { useCurrentTheme, toggleTheme, isDarkTheme };
