import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Hr,
  render,
} from '@react-email/components';

export type ContactEmailProps = {
  name: string;
  email: string;
  message: string;
};

export function ContactEmail({ name, email, message }: ContactEmailProps) {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: '#F8F8F6', fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>
        <Container style={{ maxWidth: '560px', margin: '40px auto', backgroundColor: '#ffffff', borderRadius: '12px', padding: '40px', border: '1px solid #E0E0DB' }}>
          <Heading style={{ fontSize: '20px', fontWeight: '700', color: '#1A1A1A', marginBottom: '8px' }}>
            New message from {name}
          </Heading>
          <Text style={{ fontSize: '14px', color: '#6B6B6B', marginTop: '0' }}>
            Submitted via the DKG contact form.
          </Text>

          <Hr style={{ borderColor: '#E0E0DB', margin: '24px 0' }} />

          <Text style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6B6B6B', marginBottom: '4px' }}>
            From
          </Text>
          <Text style={{ fontSize: '15px', color: '#1A1A1A', marginTop: '0' }}>
            {name}
          </Text>

          <Text style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6B6B6B', marginBottom: '4px', marginTop: '16px' }}>
            Reply to
          </Text>
          <Text style={{ fontSize: '15px', color: '#0D7377', marginTop: '0' }}>
            {email}
          </Text>

          <Hr style={{ borderColor: '#E0E0DB', margin: '24px 0' }} />

          <Text style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6B6B6B', marginBottom: '4px' }}>
            Message
          </Text>
          <Text style={{ fontSize: '15px', color: '#1A1A1A', lineHeight: '1.6', whiteSpace: 'pre-wrap', marginTop: '0' }}>
            {message}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

/** Renders the template to an HTML string for use in route.ts (no JSX needed there). */
export async function renderContactEmail(props: ContactEmailProps): Promise<string> {
  return render(<ContactEmail {...props} />);
}
