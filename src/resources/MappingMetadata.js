import {BooleanField, ReferenceField, Edit, EditButton, required, ReferenceInput, SelectInput, BooleanInput, SimpleForm, Datagrid, Filter, List, Create, TextField, TextInput} from "react-admin";

const MappingMetadataFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Avni Value" source="avniValue" alwaysOn />
        <TextInput label="Integrating System Value" source="intSystemValue" alwaysOn />
    </Filter>
);

export const MappingMetadataList = (props) => (
    <List {...props} filters={<MappingMetadataFilter/>}>
        <Datagrid>
            <TextField source="id"/>
            <ReferenceField label="Mapping Group" source="mappingGroup" reference="mappingGroup">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField label="Mapping Type" source="mappingType" reference="mappingType">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="avniValue"/>
            <TextField source="intSystemValue" label="Integration System Value"/>
            <BooleanField source="coded"/>
            <EditButton/>
        </Datagrid>
    </List>
);

function getForm(isEdit) {
    return <SimpleForm>
        {isEdit && <TextField source="id"/>}
        <ReferenceInput label="Mapping Group" source="mappingGroup" reference="mappingGroup" validate={[required("Mandatory")]}>
            <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput label="Mapping Type" source="mappingType" reference="mappingType" validate={[required("Mandatory")]}>
            <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="avniValue" fullWidth/>
        <TextInput source="intSystemValue" fullWidth label="Integration System Value"/>
        <BooleanInput source="coded"/>
    </SimpleForm>;
}

export const MappingMetadataCreate = (props) => (
    <Create {...props}>
        {getForm(false)}
    </Create>
);

export const MappingMetadataEdit = (props) => (
    <Edit {...props} mutationMode="pessimistic">
        {getForm(true)}
    </Edit>
);
