import React, { ReactNode } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  children: ReactNode;
  modalVisible: boolean;
  closeModal: () => void;
};

export default function ModalContainer({
  children,
  modalVisible,
  closeModal,
}: Props) {
  function closeModalHandler() {
    closeModal();
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <Pressable style={styles.modalContainer} onPress={closeModalHandler}>
          <View style={styles.modalContent}>
            <Pressable style={styles.modalView} onPress={() => {}}>
              {children}
            </Pressable>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
    width: "100%",
    minHeight: 329,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: "white",
    paddingHorizontal: 24,
    paddingVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
});
