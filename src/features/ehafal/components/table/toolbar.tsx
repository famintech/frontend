import { toolkitVariants, ToolkitContainer } from "@/features/ehafal/themes/datatable";

export const Toolbar = () => {
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