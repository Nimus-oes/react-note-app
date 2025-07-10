import { ICONS } from "../constants";
import styles from "./button.module.css";

interface ButtonProp {
  isMobile: boolean;
}

export function Button(props: Record<string, any>) {
  const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize + "px",
    backgroundColor: props.backgroundColor,
  };
  return (
    <button style={buttonStyle} className={styles.contentWrapper}>
      <div>{props.icon}</div>
      <div>{props.text}</div>
    </button>
  );
}

export function CreateNoteButton({ isMobile }: ButtonProp) {
  if (isMobile) {
    return (
      <Button
        text="mobile-button"
        fontSize={10}
        backgroundColor="blue"
        color="white"
      />
    );
  }

  return (
    <Button
      text="desktop-button"
      fontSize={10}
      backgroundColor="blue"
      color="white"
    />
  );
}

export function GoBackButton() {
  return (
    <Button icon={ICONS.back} text="Go Back" backgroundColor="transparent" />
  );
}

export function DeleteNoteButton({ isMobile }: ButtonProp) {
  if (isMobile) {
    return <Button icon={ICONS.delete} backgroundColor="transparent" />;
  }

  return (
    <Button
      icon={ICONS.delete}
      text="desktop-delete-button"
      fontSize={10}
      backgroundColor="transparent"
    />
  );
}

export function ArchiveNoteButton({ isMobile }: ButtonProp) {
  if (isMobile) {
    return <Button icon={ICONS.archive} backgroundColor="transparent" />;
  }

  return (
    <Button
      icon={ICONS.archive}
      text="desktop-archive-button"
      fontSize={10}
      backgroundColor="transparent"
    />
  );
}

export function SaveEditButton({ isMobile }: ButtonProp) {
  if (isMobile) {
    return (
      <Button text="Save Note" backgroundColor="transparent" color="blue" />
    );
  }

  return <Button text="Save Note" backgroundColor="blue" color="white" />;
}

export function CancelEditButton({ isMobile }: ButtonProp) {
  if (isMobile) {
    return <Button text="Cancel" backgroundColor="transparent" />;
  }

  return <Button text="Cancel" backgroundColor="grey" color="black" />;
}
