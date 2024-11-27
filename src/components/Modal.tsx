import React from "react";

type ModalProps = {
	isOpen: boolean;
	children: React.ReactNode;
};
const Modal = (props: ModalProps) => {
	return (
		<dialog className="modal" open={props.isOpen}>
			<div className="modal-box">
				{props.children}
				<form method="dialog">
					<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
				</form>
			</div>
		</dialog>
	);
};

export default Modal;
