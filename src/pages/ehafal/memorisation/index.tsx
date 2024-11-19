import { useParams } from 'react-router-dom';
import { MemorizationContainer, HeaderContainer, Title, Scope, ProgressSection } from '@/features/ehafal/components/memorisation/styles';
import { ProgressBar } from '@/features/ehafal/components/table/ProgressBar';
import { Badge } from '@/features/ehafal/components/table/Badge';

export default function Memorisation() {
    const { id } = useParams();
    
    // TODO: Replace with actual data fetching
    const memorization = {
        id,
        target: 'Surah Al-Kahf Ayat 1-10',
        scope: 'Al-Quran',
        progress: 0,
        priority: 'LOW'
    };

    return (
        <MemorizationContainer>
            <HeaderContainer
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <Title>{memorization.target}</Title>
                <Scope>
                    Scope: {memorization.scope}
                </Scope>
                <ProgressSection>
                    <ProgressBar value={memorization.progress} color="#00ff00" />
                    <Badge value={memorization.priority} color="#00ff00" />
                </ProgressSection>
            </HeaderContainer>
        </MemorizationContainer>
    );
}