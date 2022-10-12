import { Button, FormControl, Heading, Input, Stack, View } from "native-base";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { IncomeFormData } from "../../@types/types";
import AlertFeedback from "../AlertFeedback";

const AddIncome = () => {
  const [show, setShow] = React.useState<boolean>(false);

  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<IncomeFormData>({
    defaultValues: {
      title: "",
      quantity: "",
    },
  });

  const onSubmit = handleSubmit(({ quantity, title }) => {
    reset();
    setShow(true);
  });
  return (
    <View
      _dark={{ bg: "dark.200" }}
      _light={{ bg: "light.200" }}
      px={4}
      flex={1}
    >
      <Heading py={2}>Adicionar Receita</Heading>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormControl>
            <Stack>
              <FormControl.Label>Receita</FormControl.Label>
              <Input
                placeholder="Ex: Salário"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                _dark={{
                  borderColor: "light.400",
                  color: "light.300",
                  placeholderTextColor: "light.500",
                }}
              />
            </Stack>
          </FormControl>
        )}
        name="title"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormControl>
            <Stack>
              <FormControl.Label>Valor</FormControl.Label>
              <Input
                placeholder="Ex: Salário"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="number-pad"
                _dark={{
                  borderColor: "light.400",
                  color: "light.300",
                  placeholderTextColor: "light.500",
                }}
              />
            </Stack>
          </FormControl>
        )}
        name="quantity"
      />
      <Button onPress={onSubmit} mt={4} mb={10}>
        Adicionar
      </Button>
      {show && (
        <AlertFeedback
          title={"Sucesso"}
          variant={"success"}
          message={"A receita foi adicionada com sucesso"}
          close={() => setShow(false)}
        />
      )}
      {(errors.title || errors.quantity) && (
        <AlertFeedback
          title={"Erro"}
          variant={"error"}
          message={"Os campos são obrigatórios"}
          close={() => {
            clearErrors('quantity');
            clearErrors('title');
          }}
        />
      )}
    </View>
  );
};

export default AddIncome;
