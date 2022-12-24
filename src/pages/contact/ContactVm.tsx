import { useTranslation } from "react-i18next";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";

export function useContact() {
  const { t } = useTranslation();
  let validate = (values: any) => {
    const errors: any = {};
    if (!values.fName) errors.fName = t("contactPage.formFieldsErrors.fName");
    if (!values.lName) errors.lName = t("contactPage.formFieldsErrors.lName");
    if (!values.email) errors.email = t("contactPage.formFieldsErrors.email");
    if (!values.phone) errors.phone = t("contactPage.formFieldsErrors.phone");
    if (!values.message)
      errors.message = t("contactPage.formFieldsErrors.message");
    return errors;
  };
  let initialValue = {
    fName: "",
    lName: "",
    email: "",
    phone: "",
    message: "",
  };

  const mIcon = L.icon({
    iconUrl: icon,
  });
  return {
    initialValue,
    validate,
    mIcon,
  };
}
