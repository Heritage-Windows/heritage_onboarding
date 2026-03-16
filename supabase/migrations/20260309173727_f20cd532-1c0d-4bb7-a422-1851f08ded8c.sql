-- Create storage bucket for W-9 forms
INSERT INTO storage.buckets (id, name, public)
VALUES ('w9-forms', 'w9-forms', false);

-- RLS: Users can upload their own W-9
CREATE POLICY "Users can upload own W9"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'w9-forms' AND (storage.foldername(name))[1] = auth.uid()::text);

-- RLS: Users can view their own W-9
CREATE POLICY "Users can view own W9"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'w9-forms' AND (storage.foldername(name))[1] = auth.uid()::text);

-- RLS: Admins can view all W-9s
CREATE POLICY "Admins can view all W9s"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'w9-forms' AND public.has_role(auth.uid(), 'admin'));

-- RLS: Admins can download all W-9s
CREATE POLICY "Admins can download all W9s"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'w9-forms' AND public.has_role(auth.uid(), 'admin'));