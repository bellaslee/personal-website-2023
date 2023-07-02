import React from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/BackButton.module.scss"

export default function BackButton() {
  const router = useRouter();

  return (
    <a onClick={() => { router.back() }} className={styles.back}>
      <FontAwesomeIcon icon={faArrowLeft} /> Back
    </a>
  )
}