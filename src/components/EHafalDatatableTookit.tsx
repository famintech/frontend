import { toolkitVariants, ToolkitContainer } from "@/theme/datatable";

export const TableToolkit = () => {
    return (
        <ToolkitContainer
            initial="hidden"
            animate="visible"
            variants={toolkitVariants}
        >
            {/* Toolkit content will go here */}
        </ToolkitContainer>
    );
};