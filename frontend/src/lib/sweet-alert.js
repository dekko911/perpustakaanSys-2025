import Swal from "sweetalert2";

export const swalToast = (
	icon = "success",
	title = "Successfully",
	width = 410
) => {
	const Toast = Swal.mixin({
		toast: true,
		position: "top-end",
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.onmouseenter = Swal.stopTimer;
			toast.onmouseleave = Swal.resumeTimer;
		},
		width,
	});
	Toast.fire({
		icon,
		title,
		background: "#2b2b2a",
		color: "#ffffff",
	});
};
