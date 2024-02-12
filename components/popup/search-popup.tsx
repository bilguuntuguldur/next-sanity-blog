import React from "react";
import { redirect } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import styles from "./seach-popup.module.css" 

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

async function searchPosts(formData: FormData) {
  "use server";
  
  const searchQuery = formData.get("searchQuery")?.toString();
  
  if (searchQuery) {
      redirect("/search?query=" + searchQuery);
  }
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">

      <div className={styles.container}>
        <form action="">
          <div className={styles.form}>
            <span className="">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="magnify_glass"/>
            </span>
            <input
              name="searchQuery"
              placeholder="Та юу хайж байна вэ?"
              className={styles.input}
            >
            </input>
          </div>
        </form>
        <p className={styles.p}>Мэдээлэл, мэдээлэлтэй холбоотой түлхүүр үг ашиглана уу!</p>
        <button
          className={styles.button}
          onClick={onClose}
        >Close</button>
      </div>
    </div>
  );
};

export default Popup;
