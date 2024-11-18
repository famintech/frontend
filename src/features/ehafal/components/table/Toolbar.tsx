import { toolkitVariants } from "@/features/ehafal/components/table/styles/animations";
import { ToolbarContainer } from "@/features/ehafal/components/table/styles/components";

export const Toolbar = () => {
    return (
        <ToolbarContainer
            initial="hidden"
            animate="visible"
            variants={toolkitVariants}
        >
            {/* Toolbar content will go here */}
        </ToolbarContainer>
    );
};