import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Reservation from "./components/Reservation";

test("Reservation form works as expected", async () => {
  render(<Reservation />);

  // Form alanlarına veri girişi yap
  fireEvent.change(screen.getByLabelText("Date:"), {
    target: { value: "2023-12-31" },
  });
  fireEvent.change(screen.getByLabelText("Time:"), {
    target: { value: "18:00" },
  });
  fireEvent.change(screen.getByLabelText("Occasion:"), {
    target: { value: "Birthday" },
  });
  fireEvent.change(screen.getByLabelText("Guests:"), {
    target: { value: "5" },
  });

  // Submit düğmesine tıkla
  fireEvent.click(screen.getByText("Submit"));

  // Formun gönderilmesini bekleyin
  await waitFor(() => {
    expect(screen.getByText("Reservation Information")).toBeInTheDocument();
  });

  // Alert içeriğini kontrol et
  expect(screen.getByText("Date: 2023-12-31")).toBeInTheDocument();
  expect(screen.getByText("Time: 18:00")).toBeInTheDocument();
  expect(screen.getByText("Occasion: Birthday")).toBeInTheDocument();
  expect(screen.getByText("Guests: 5")).toBeInTheDocument();

  // Alert penceresini kapat
  fireEvent.click(screen.getByText("Close"));

  // Formun sıfırlandığını kontrol et
  expect(screen.queryByText("Reservation Information")).toBeNull();
  expect(screen.getByLabelText("Date:")).toHaveValue("");
  expect(screen.getByLabelText("Time:")).toHaveValue("");
  expect(screen.getByLabelText("Occasion:")).toHaveValue("");
  expect(screen.getByLabelText("Guests:")).toHaveValue("2");
});
